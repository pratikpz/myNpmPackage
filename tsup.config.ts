import { defineConfig } from "tsup";

export default defineConfig({
  entryPoints: ["src/index.ts"],
  dts: true,
  sourcemap: true,
  format: ["cjs", "esm"],
  minify: true,
  clean: true,
  watch: true,
});