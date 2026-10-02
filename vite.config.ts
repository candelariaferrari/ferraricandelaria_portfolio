import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // React + Router + i18next + Motion suman ~500 kB sin comprimir (~160 kB gzip),
    // un tamaño razonable para una SPA. Los casos de estudio ya se cargan aparte.
    chunkSizeWarningLimit: 600,
  },
})
