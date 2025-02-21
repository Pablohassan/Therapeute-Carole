import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  server: {
    host: "0.0.0.0", // Listen on all network interfaces
    port: 5173, // Optional: Define a specific port
  },

  plugins: [tailwindcss()],
});
