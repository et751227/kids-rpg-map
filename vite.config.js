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
        practice: resolve(__dirname, 'src/pages/PracticeMode.html') // ✅ 放入 src 才能參與打包
      }
    }
  }
});
