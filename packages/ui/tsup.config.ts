import { defineConfig, type Options } from "tsup";

export default defineConfig((options: Options) => ({
  treeshake: true,
  splitting: true,
  // entry: ["src/index.tsx","src/**/*.{tsx, css, ts}"],
  entry: ["src/**/*.{tsx, css, ts}"],
  format: ["esm"],
  dts: true,
  minify: true,
  clean: true,
  external: ["react"],
  esbuildPlugins: [],
  ...options,
}));
