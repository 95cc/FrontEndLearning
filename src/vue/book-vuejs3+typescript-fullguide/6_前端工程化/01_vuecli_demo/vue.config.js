const { defineConfig } = require('@vue/cli-service')
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = defineConfig({
  // 项目引用node_modules中的包也会用Babel来编译
  transpileDependencies: true,
  // 1. outputDir: 指定打包输出的目录名，默认 dist
  outputDir: 'build-cc',
  // 2. assetsDir: 指定静态资源存放目录(相对于outputDir)
  assetsDir: 'static-cc',
  // 3. publicPath: 指定引用资源的前缀
  publicPath: process.env.NODE_ENV === 'production' ? '/my-app/' : '/',
  // 4. alias: 配置导包路径的别名
  // A function that will receive an instance of ChainableConfig powered by webpack-chain
  // https://github.com/neutrinojs/webpack-chain
  chainWebpack: (config) => {
    // 1. 为路径起别名
    config.resolve.alias
      // 2. @别名代表的路径是: 指向当前项目的src目录
      .set('@', resolve('src'))
      // 3. .components别名代表的路径是: 指向当前项目src目录下的components目录
      .set('components', resolve('src/components'))
  },
})
