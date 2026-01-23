## Cloudflare Pages + Brevo (secure form submissions)

### Why
Brevo API keys must never be used in the browser. On Cloudflare Pages, the secure setup is:
- Vue frontend submits to `POST /api/send-inquiry`
- Cloudflare Pages Function (server-side) calls Brevo using `BREVO_API_KEY` secret

### Files in this repo
- `functions/api/send-inquiry.ts`: Pages Function that sends the email via Brevo
- `src/components/sections/BookingFormSection.vue`: posts to `/api/send-inquiry`

### Local dev
1. Create `.env.local` for Vite as usual (no Brevo secrets needed there).
2. Create a Wrangler vars file for Pages Functions:
   - Create `.dev.vars` (do not commit) next to `package.json`
   - Add:
     - `BREVO_API_KEY=...`
3. Run (two options):
   - Option A (simplest): `npm run cf:dev` and open `http://localhost:8788`
   - Option B (hot-reload UI on Vite): run `npm run cf:dev` in one terminal and `npm run dev` in another, then open `http://localhost:5173`
     - Vite proxies `/api/*` to `http://localhost:8788` (see `vite.config.ts`)

### Production (Cloudflare Pages)
1. In Cloudflare Pages project settings → **Environment Variables** (or Secrets):
   - `BREVO_API_KEY`
2. Deploy. The function will be available at:
   - `https://<your-domain>/api/send-inquiry`

