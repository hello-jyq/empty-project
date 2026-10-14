import { fileURLToPath, URL } from "node:url"
import { defineConfig, loadEnv } from "vite"
import vue from "@vitejs/plugin-vue"
import { vitePluginForArco } from "@arco-plugins/vite-vue"

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_")

  return {
    plugins: [vue(), vitePluginForArco({ style: "css" })],
    resolve: { alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) } },
    build: {
      target: "es2020",
      rollupOptions: {
        output: {
          manualChunks(id) {
            const module = id.replace(/\\/g, "/").split("/node_modules/")[1]
            if (!module) {
              return
            }
            if (/^(vue|@vue\/|@vueuse\/|vue-router|pinia|vue-i18n|@intlify\/)/.test(module)) {
              return "framework"
            }
            if (module.startsWith("axios/")) {
              return "http"
            }
          },
          entryFileNames: "js/[name]-[hash].js",
          chunkFileNames: "js/[name]-[hash].js",
          assetFileNames: "assets/[name]-[hash][extname]",
        },
      },
    },
    server: {
      host: "0.0.0.0",
      port: 3000,
      proxy: env.VITE_API_PROXY_TARGET
        ? {
            "/api": {
              target: env.VITE_API_PROXY_TARGET,
              changeOrigin: true,
              rewrite: (path) => path.replace(/^\/api/, ""),
            },
          }
        : undefined,
    },
  }
})
