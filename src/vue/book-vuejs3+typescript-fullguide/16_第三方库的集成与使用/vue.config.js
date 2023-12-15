const { defineConfig } = require('@vue/cli-service')
// 1. 按需自动导入组件的插件
// const AutoImport = require('unplugin-auto-import/webpack')
// const Components = require('unplugin-vue-components/webpack')
// const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

// 2. 自动导入Element组件样式 (在代码里手动引入组件)

module.exports = defineConfig({
  transpileDependencies: true,

  configureWebpack: {
    plugins: [
      // AutoImport({
      //   resolvers: [ElementPlusResolver()],
      // }),
      // Components({
      //   resolvers: [ElementPlusResolver()],
      // }),
      require('unplugin-element-plus/webpack')({}),
    ],
  },
})
