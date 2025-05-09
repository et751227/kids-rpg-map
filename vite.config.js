// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'main-practice': resolve(__dirname, 'src/main-practice.jsx')  // ✅ JS 直接當 entry
      }
    }
  }
});
