/* eslint-disable import/no-extraneous-dependencies */
import dts from "vite-plugin-dts";
import { defineConfig } from "vite";
import * as path from "path";
import * as packageJson from "./package.json";

export default defineConfig({
  base: "./", // Ensure correct path resolution for web deployment
  build: {
    outDir: "./dist",
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      formats: ["es"], // Keep ES module format
      fileName: "index",
    },
    rollupOptions: {
      external: [
        ...Object.keys(packageJson.peerDependencies || {}),
        "three",
        "@thatopen/ui-components",
      ],
      output: {
        globals: {
          three: "THREE",
          "@thatopen/ui-components": "BUI",
        },
        // Ensure proper asset and chunk handling
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
        }
      },
    },
    sourcemap: true, // Add source maps for debugging
  },
  plugins: [
    dts({
      include: ["./src"],
      exclude: ["./src/**/example.ts", "./src/**/*.test.ts"],
    }),
  ],
  resolve: {
    alias: {
      // Optional: Add any necessary path aliases
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
