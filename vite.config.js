import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  chockidarWatchOptions: {
    usePolling: true
  },
  base: '/',
  server: {
    watch: {
      usePolling: true
    },
    host: '0.0.0.0'
  },
  optimizeDeps: {
    include: ['@ant-design/icons-vue']
  }
})
