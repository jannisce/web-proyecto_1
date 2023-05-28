import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import postcss from 'postcss';

export default defineConfig({
  plugins: [
    react(),
    eslint(),
    postcss() 
  ],
  test: {
    setupFiles: './src/setupTests.js',
    globals: true,
    environment: 'jsdom'
  },
});
