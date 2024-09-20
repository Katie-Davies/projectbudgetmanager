// vitest.config.ts
import { defineConfig } from 'vite'
import { configDefaults } from 'vitest/config'

export default defineConfig({
  test: {
    ...configDefaults,
    environment: 'jsdom', // Set the test environment to jsdom
  },
})
