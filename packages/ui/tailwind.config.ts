import type { Config } from 'tailwindcss';
// import sharedConfig from '@repo/tailwind-config';

const config: Pick<Config, "prefix" | "presets" | "content"> = {
  content: ["./src/**/*.tsx"],
  presets: [{
    theme: {
      extend: {
        backgroundImage: {},
      },
    },
    plugins: [],
  }],
};

export default config;
