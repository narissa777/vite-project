import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import basicSsl from '@vitejs/plugin-basic-ssl'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), basicSsl()],
  build: {
    outDir: './main',  // Derlenen dosyalar "docs" klasörüne çıkacak
  },
  base: './',  // Bağlantılar projenin kök dizinine göre ayarlanacak
})
