// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/v1': {
        target: 'https://cloud.appwrite.io',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/v1/, '') // Remove the '/v1' prefix
      }
    }
  }
});
