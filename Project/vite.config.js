import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
      "@shared": path.resolve(__dirname, "./src/components/shared"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@images": path.resolve(__dirname, "./src/assets/images"),
      "@Util": path.resolve(__dirname, "./src/util"),
      "@pages": path.resolve(__dirname, "./src/components/pages"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      // add more as needed
    },
  },
});
