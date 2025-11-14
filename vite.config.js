// client/vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // PROXY SETUP: Redirects /api requests to the Express backend
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Matches your Express server port
        changeOrigin: true,
        secure: false,
        // rewrite: (path) => path.replace(/^\/api/, '') // Use this if your Express routes *don't* start with /api
      },
    }
  }
})