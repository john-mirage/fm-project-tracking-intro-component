import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import { resolve } from "path";

export default defineConfig({
  plugins: [solidPlugin()],
  resolve: {
    alias: {
      "@components": resolve(__dirname, "src/components"),
      "@images": resolve(__dirname, "src/images"),
    },
  },
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
});
