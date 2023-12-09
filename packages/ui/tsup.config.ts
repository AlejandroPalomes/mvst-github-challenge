import { defineConfig, type Options } from "tsup";

export default defineConfig((options: Options) => ({
  treeshake: true,
  splitting: true,
  entry: ["src/**/*.{tsx, css, ts}"],
  format: ["esm"],
  dts: true,
  minify: true,
  clean: true,
  external: ["react"],
  esbuildPlugins: [],
  ...options,
}));
