import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // host: '192.168.88.92',
    host: '0.0.0.0',
    port: 5173 // Port par défaut de Vite, vous pouvez le changer si nécessaire
  }
})
