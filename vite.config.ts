import { fileURLToPath, URL } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { frenchTtsPlugin } from './plugins/frenchTts.ts'

export default defineConfig({
  plugins: [vue(), tailwindcss(), frenchTtsPlugin()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
