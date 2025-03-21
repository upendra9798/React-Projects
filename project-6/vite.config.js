import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["@chakra-ui/react", "@emotion/react", "@emotion/styled", "framer-motion"],
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
