import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://github.com/KreativeND/e-commerce",
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: 'E-Commerce App',
        short_name: 'E-Commerce',
        description: 'Your e-commerce app description.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'https://via.placeholder.com/192x192',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'https://via.placeholder.com/512x512',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
