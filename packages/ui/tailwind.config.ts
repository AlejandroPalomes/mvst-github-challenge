import type { Config } from 'tailwindcss';
// import sharedConfig from '@repo/tailwind-config';

const config: Pick<Config, "prefix" | "presets" | "content"> = {
  content: ["./src/**/*.tsx"],
  presets: [{
    theme: {
      extend: {
        customGray: {
          100: '#F9FAFC',
          200: '#EBEEF4',
          300: '#CED3DE',
          400: '#989DA9',
          500: '#5E626A',
          600: '#28292C'
        }
      },
    },
    plugins: [],
  }],
};

export default config;
