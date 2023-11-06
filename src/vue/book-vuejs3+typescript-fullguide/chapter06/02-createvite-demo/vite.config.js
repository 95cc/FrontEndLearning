import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    // 1. 用于指定打包输出的目录名称，默认dist
    outDir: 'build-cc',
    // 2. 指定静态资源存放的目录，默认 assets
    assetsDir: 'static-cc',
  },
  // 3. 指定开发或生产环境服务的公共基础路径，即指定引用资源的前缀。和vue.config.js中的publicPath功能相同
  /**
   * base支持的类型：
   * 1. 绝对URL路径，如 /my-app/
   * 2. 完整URL，如 http://hy.com
   * 3. 用于dev环境的空字符串 或 ./
   */
  base: '/my-app/',
  plugins: [
    vue(), // 提供Vue.js单文件组件支持
  ],
  resolve: {
    // 4. 用于为导包的路径设置别名，与vue.config.js中的alias功能相同
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      components: fileURLToPath(new URL('./src/components', import.meta.url)),
    },
  },
})
