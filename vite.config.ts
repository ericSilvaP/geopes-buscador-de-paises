import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import dotenv from 'dotenv'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // base: process.env.VITE_BASE_PATH || '/geopes-buscador-de-paises',
  base: process.env.VITE_BASE_PATH,
  define: {
    'process.env.GOOGLE_MAPS_API_KEY': JSON.stringify(
      process.env.VITE_GOOGLE_MAPS_API_KEY
    ),
  },
})
