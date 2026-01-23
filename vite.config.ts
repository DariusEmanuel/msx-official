import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import vueform from "@vueform/vueform/vite";

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith("swipe"),
        },
      },
    }),
    // Ensures Vueform deps (eg. wnumb) are optimized correctly in Vite dev server
    vueform(),
    ViteImageOptimizer({
      jpg: {
        quality: 80,
      },
      png: {
        quality: 60,
      },
      svg: {
        quality: 30,
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
