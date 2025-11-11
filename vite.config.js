import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Konfigurasi dasar agar Vite tahu di mana index.html berada
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // bisa diubah kalau bentrok
  },
});
