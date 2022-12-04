import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { vitePluginMdToHTML } from "vite-plugin-md-to-html";

export default defineConfig({
  plugins: [
    vue(),
    vitePluginMdToHTML({
      syntaxHighlighting: true,
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
