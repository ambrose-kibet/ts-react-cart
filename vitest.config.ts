/// <reference types="vitest" />
import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    watch: true,
    globals: true,
    clearMocks: true,
    environment: 'happy-dom',
    setupFiles: './tests/setup.ts',
  },
});
