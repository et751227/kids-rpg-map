import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'public/index.html'),
        practice: resolve(__dirname, 'public/PracticeMode.html'),
        challenge: resolve(__dirname, 'public/challenge.html'),
        records: resolve(__dirname, 'public/records.html'),
      },
    },
  },
});
