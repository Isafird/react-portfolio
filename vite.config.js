import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(), tailwindcss()],
// })

export default defineConfig({
  // Tetap sertakan base agar aset terbaca di sub-folder GitHub
  base: "/react-portfolio",
  plugins: [
    react(),
    tailwindcss(),
  ],
})
