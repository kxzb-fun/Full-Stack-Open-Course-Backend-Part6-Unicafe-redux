import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // https://fullstackopen.com/zh/part5/%E6%B5%8B%E8%AF%95_react_%E5%BA%94%E7%94%A8
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './testSetup.js', 
  }
})
