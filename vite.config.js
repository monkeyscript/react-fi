import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/lib/index.jsx"),
      name: "React-FI",
      fileName: (format) => (format === "es" ? "react-fi.js" : "react-fi.cjs"),
      formats: ["cjs", "es"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        banner: "'use client';",
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
  },
});
