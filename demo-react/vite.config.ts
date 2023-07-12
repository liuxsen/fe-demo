import path from 'node:path'
import type { UserConfigExport } from 'vite'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const commonConfig: UserConfigExport = {
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src'),
    },
  },
}
export default defineConfig(({ command, mode, ssrBuild }) => {
  if (command === 'serve') {
    return {
      ...commonConfig,
      // dev 独有配置
      server: {
        // origin: 'http://127.0.0.1:8081',
        proxy: {
          '/api/': {
            target: 'https://liuxsen.com',
            changeOrigin: true,
            rewrite: path => path.replace(/^\/api/, ''),
          },
        },
      },
    }
  }
  else {
    // command === 'build'
    return {
      ...commonConfig,
      // build 独有配置
    }
  }
})
