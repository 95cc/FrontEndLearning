# 《TypeScript 开发实战》极客时间

### ts-in-action 代码执行流程记录

- npm init -y
- npm install typescript -g 或者 npm i typescript
- tsc --init
- npm i webpack webpack-cli webpack-dev-server -D
- 创建 build 目录，编写相关 webpack 相关配置
- 安装 ts-loader: npm i ts-loader typescript -D
- 安装插件 html-webpack-plugin: npm i html-webpack-plugin
  作用：通过一个模板帮助我们生成网站的首页，而且可以帮助我们把输出文件自动嵌入到 template 文件中
  ```
  plugins: [
    new HtmlWebpackPlugin({
      template: './scr/tpl/index.html'
    })
  ]
  ```
- 安装插件 npm i clean-webpack-plugin -D
  作用：成功构建后，帮助我们清空 dist 目录
- 把两个配置文件合并: npm i webpack-merge -D
- 去 build 目录，进行配置

- node 执行 ts，安装 ts-node
- 如何处理不同模块的不兼容性问题（es6/commonjs）
  - 两个模块方案不要混用
  - 如果 es6 有顶级导出，可能会被 node 模块混用，ts 提供了一个兼容性语法
    es6 顶级导出: 如 test.ts 里内容为 export = function() { console.log('test')}
    node 里使用：import test = require('test') 或者 import test from 'test'
    打开 tsconfig.json 里的配置："esModuleInterop": "true"

### 其他

1. 课程中演示用到的在线编码平台：https://tool.lu/coderunner/
2. 类型搜索地址：http://microsoft.github.io/TypeSearch/
   [npm displays packages with bundled TypeScript declarations](https://github.blog/changelog/2020-12-16-npm-displays-packages-with-bundled-typescript-declarations/)
3. ts RN 项目参考：https://github.com/akveo/react-native-ui-kitten
