/// <reference types="vite/client" />

// Minimal Cloudflare Pages Functions typing for `functions/**` files.
// (Avoids adding extra type dependencies; Cloudflare runtime provides this at deploy time.)
declare type PagesFunction<Env = unknown> = (
  context: { env: Env; request: Request }
) => Response | Promise<Response>;

interface ImportMetaEnv {
  readonly VITE_API_URL?: string; // Add other custom env variables here
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}