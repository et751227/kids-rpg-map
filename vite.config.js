import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        PracticeMode: resolve(__dirname, 'public/PracticeMode.html'), // 練習模式
        //challenge: resolve(__dirname, 'public/challenge.html'),
        //records: resolve(__dirname, 'public/records.html'),
      },
    },
  },
});
