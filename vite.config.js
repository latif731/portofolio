import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr'

// Konfigurasi dasar agar Vite tahu di mana index.html berada
export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    port: 5173, // bisa diubah kalau bentrok
  },
});
