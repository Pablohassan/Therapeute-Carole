import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { splitVendorChunkPlugin } from "vite";

export default defineConfig({
  server: {
    host: "0.0.0.0", // Listen on all network interfaces
    port: 5173, // Optional: Define a specific port
  },

  plugins: [
    tailwindcss(),
    react({
      // Enable React 19 features
      jsxImportSource: "react",
      babel: {
        plugins: [
          // Add any babel plugins if needed
        ],
      },
    }),
    splitVendorChunkPlugin(), // Split chunks for better caching
  ],

  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        sourcemapExcludeSources: false,
        // Optimize chunk size
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
          "ui-vendor": ["framer-motion", "react-icons"],
        },
      },
    },
    // Enable minification for production
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs in production
      },
    },
  },

  // Optimize dependencies
  optimizeDeps: {
    include: ["react", "react-dom", "framer-motion"],
  },
});
