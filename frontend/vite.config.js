import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      Assets: resolve(__dirname, './'),
      Components: resolve(__dirname, './src/components'),
      Styles: resolve(__dirname, './src/Styles'),
      Hooks: resolve(__dirname, './src/hooks'),
      Services: resolve(__dirname, './src/services'),
      Pages: resolve(__dirname, './src/pages'),
      Routes: resolve(__dirname, './src/routes'),
    },
  },
})
