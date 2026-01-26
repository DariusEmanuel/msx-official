type Env = {
    BREVO_API_KEY: string;
};

type SendInquiryBody = {
    name: string;
    email: string;
    phone: string;
    event_date: string;
    location: string;
    event_type: string;
    message?: string;
};

function json(data: unknown, status = 200) {
    return new Response(JSON.stringify(data), {
        status,
        headers: {
            "content-type": "application/json",
            "cache-control": "no-store",
        },
    });
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
    const apiKey = context.env.BREVO_API_KEY;
    if (!apiKey) {
        console.error(
            "Missing BREVO_API_KEY. Set it in Cloudflare Pages -> Settings -> Environment variables (Production), or in .dev.vars for local dev."
        );
        return json(
            {
                ok: false,
                error: "Missing BREVO_API_KEY",
                hint: "Set BREVO_API_KEY in Cloudflare Pages environment variables (Production) and redeploy.",
            },
            500
        );
    }

    let body: SendInquiryBody;
    try {
        body = (await context.request.json()) as SendInquiryBody;
    } catch {
        return json({ ok: false, error: "Invalid JSON" }, 400);
    }

    const name = (body.name || "").trim();
    const email = (body.email || "").trim();
    const phone = (body.phone || "").trim();
    const eventDate = (body.event_date || "").trim();
    const location = (body.location || "").trim();
    const eventType = (body.event_type || "").trim();
    const message = (body.message || "").trim();

    if (!name || !email || !phone || !eventDate || !location || !eventType) {
        return json({ ok: false, error: "Missing required fields" }, 400);
    }

    const toEmail = "events@mateisax.com";

    const htmlContent = [
        `<p><b>NEW CLIENT — mateisax.com</b></p>`,
        `<p><b>Name:</b> ${escapeHtml(name)}</p>`,
        `<p><b>Email:</b> ${escapeHtml(email)}</p>`,
        `<p><b>Phone:</b> ${escapeHtml(phone)}</p>`,
        `<p><b>Event date:</b> ${escapeHtml(eventDate)}</p>`,
        `<p><b>Location:</b> ${escapeHtml(location)}</p>`,
        `<p><b>Type of event:</b> ${escapeHtml(eventType)}</p>`,
        message
            ? `<p><b>Message:</b><br/>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>`
            : "",
    ].join("\n");

    const payload = {
        subject: "Booking inquiry — mateisax.com",
        sender: {
            name: "Matei Sax Website",
            email: "client@mateisax.com",
        },
        replyTo: {
            name,
            email,
        },
        to: [{ email: toEmail, name: "MSX" }],
        htmlContent,
    };

    let brevoRes: Response;
    try {
        brevoRes = await fetch("https://api.brevo.com/v3/smtp/email", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                accept: "application/json",
                "api-key": apiKey,
            },
            body: JSON.stringify(payload),
        });
    } catch (e) {
        console.error("Brevo fetch failed", e);
        return json({ ok: false, error: "Network error calling Brevo" }, 502);
    }

    if (!brevoRes.ok) {
        const details = await brevoRes.text().catch(() => "");
        return json(
            { ok: false, error: "Brevo request failed", status: brevoRes.status, details },
            502
        );
    }

    return json({ ok: true }, 200);
};

function escapeHtml(input: string) {
    return input
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

