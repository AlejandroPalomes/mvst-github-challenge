import type { Config } from "tailwindcss";
// import sharedConfig from "@repo/tailwind-config";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@mvst-ui/src/components/*.tsx"
  ],
  theme: {
    extend: {}
  },
  plugins: [],
};

export default config;
