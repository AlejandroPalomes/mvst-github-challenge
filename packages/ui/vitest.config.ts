import { configDefaults, defineConfig } from 'vitest/config'
import tailwindcss from 'tailwindcss'


export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  test: {
    coverage: {
      provider: 'istanbul',
      exclude: [
      ...(configDefaults.coverage.exclude || []),
      'postcss.config.js',
      'tailwind.config.ts'
      ]
    },
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
  }
})
