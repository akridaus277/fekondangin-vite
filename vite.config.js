import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        'home': 'src/landingPage/main.jsx',
        'member-area': 'src/memberArea/main.jsx'
      },
    },
  },
})
