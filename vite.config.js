import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // 配置路径别名
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'views': '@/views',
      'assets': '@/assets',
      'common': '@/common',
      'components': '@components',
      'network': '@/network',
      'router': '@/router',
      'store': '@/store'
    },
    // 省略文件后缀
    extensions: ['', '.js', '.json', '.vue', '.scss', '.css']
  },
  server: {
    // 修改端口
    port: 8888
  }
})
