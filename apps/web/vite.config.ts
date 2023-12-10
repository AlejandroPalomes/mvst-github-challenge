import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  server: {
    port: 3000,
  },
  test: {
    setupFiles: './vitest.setup.ts',
    globals: true,
    environment: 'jsdom',
    environmentOptions: {
      jsom: {
        resources: 'usable'
      }
    },
    exclude: [
      'node_modules/**'
    ]
  },
  
})
