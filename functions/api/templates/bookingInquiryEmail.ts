export type BookingInquiryEmailInput = {
    name: string;
    email: string;
    phone: string;
    eventDate: string;
    location: string;
    eventType: string;
    message?: string;
};

export function renderBookingInquiryEmail(input: BookingInquiryEmailInput) {
    const messageHtml = (input.message || "").trim()
        ? `<tr>
        <td style="${labelCellStyle}">Message</td>
        <td style="${valueCellStyle}">
          <div style="white-space:pre-wrap; line-height:1.5;">${escapeHtml(
            (input.message || "").trim()
        )}</div>
        </td>
      </tr>`
        : "";

    const html = `<!doctype html>
<html>
  <body style="margin:0; padding:0; background:#0f0f10; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; color:#e9e9ea;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#0f0f10; padding:24px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:680px; background:#181818; border:1px solid rgba(255,255,255,0.10); border-radius:12px; overflow:hidden;">
            <tr>
              <td style="padding:18px 18px 10px;">
                <div style="font-size:12px; letter-spacing:0.12em; text-transform:uppercase; color:rgba(255,255,255,0.7);">
                  New booking inquiry
                </div>
                <div style="font-size:20px; font-weight:700; margin-top:6px; color:#ffffff;">
                  mateisax.com
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding:0 18px 18px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse; border-top:1px solid rgba(255,255,255,0.08);">
                  <tr>
                    <td style="${labelCellStyle}">Name</td>
                    <td style="${valueCellStyle}">${escapeHtml(input.name)}</td>
                  </tr>
                  <tr>
                    <td style="${labelCellStyle}">Email</td>
                    <td style="${valueCellStyle}">
                      <a href="mailto:${escapeAttr(input.email)}" style="color:#e9e9ea; text-decoration:underline;">
                        ${escapeHtml(input.email)}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td style="${labelCellStyle}">Phone</td>
                    <td style="${valueCellStyle}">${escapeHtml(input.phone)}</td>
                  </tr>
                  <tr>
                    <td style="${labelCellStyle}">Event date</td>
                    <td style="${valueCellStyle}">${escapeHtml(input.eventDate)}</td>
                  </tr>
                  <tr>
                    <td style="${labelCellStyle}">Location</td>
                    <td style="${valueCellStyle}">${escapeHtml(input.location)}</td>
                  </tr>
                  <tr>
                    <td style="${labelCellStyle}">Type of event</td>
                    <td style="${valueCellStyle}">${escapeHtml(input.eventType)}</td>
                  </tr>
                  ${messageHtml}
                </table>

                <div style="margin-top:14px; font-size:12px; color:rgba(255,255,255,0.65);">
                  Tip: you can reply directly to this email to reach the client (Reply-To is set).
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

    return { subject: "Booking inquiry — mateisax.com", html };
}

const labelCellStyle =
    "width:160px; padding:12px 10px; font-size:12px; letter-spacing:0.08em; text-transform:uppercase; color:rgba(255,255,255,0.65); border-bottom:1px solid rgba(255,255,255,0.06); vertical-align:top;";
const valueCellStyle =
    "padding:12px 10px; font-size:14px; color:rgba(255,255,255,0.92); border-bottom:1px solid rgba(255,255,255,0.06); vertical-align:top;";

function escapeAttr(input: string) {
    return escapeHtml(input).replace(/"/g, "&quot;");
}

function escapeHtml(input: string) {
    return input
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

