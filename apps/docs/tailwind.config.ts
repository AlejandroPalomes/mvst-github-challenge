import type { Config } from "tailwindcss";
// import sharedConfig from "@repo/tailwind-config";

const config: Config = {
  content: [
    "./index.html",
    "./stories/*.{js,ts,jsx,tsx}",
    "./node_modules/@mvst/ui/src/components/*.tsx"
  ],
  theme: {
    extend: {
      colors: {
        customGray: {
          100: '#F9FAFC',
          200: '#EBEEF4',
          300: '#CED3DE',
          400: '#989DA9',
          500: '#5E626A',
          600: '#3b3b3b',
          700: '#28292C',
          800: '#242424'
        }
      }
    }
  },
  plugins: [],
};

export default config;
