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

### 如何选择ts编译工具

1. 如果没有使用过babel，首选TypeScript自身的编译器（可配合ts-loader）
2. 项目中已有babel，安装`@babel/preset-typescript`（可配合tsc做类型检查）
3. 两种编译工具不要混用

### ESLint

需要安装的包：
`npm i eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser -D`

1. eslint
2. @typescript-eslint/eslint-plugin
3. @typescript-eslint/parser

babel-eslint 与 typescript-eslint

- babel-eslint: 支持TypeScript没有的额外的语法检查，抛弃TypeScript，不支持类型检查
- typescript-eslint: 基于TypeScript的AST，支持创建基于类型信息的规则（tsconfig.json）

建议：

- 两者底层机制不一样，不要一起使用。
- Babel体系建议使用babel-eslint，否则可以使用typescript-eslint。

### TypeScript工具体系

- 编译工具：ts-loader、@babel/preset-typescript
- 代码检查工具：eslint+typescript-eslint、babel-eslint
- 单元测试工具：ts-jest、babel-jest

### jest

- npm i jest ts-jest @types/jest -D
- npm i jest babel-jest @types/jest -D

### 实战篇 - React

npm i react react-dom
npm i -D @types/react @types/react-dom

### 使用脚手架创建react项目

https://create-react-app.dev/docs/getting-started#npx

1. npx create-react-app ts-6-scaffold-react --template typescript
2. 额外安装：

- npm i antd axios react-router-dom
- npm i -D @types/react-router-dom babel-plugin-import customize-cra react-app-rewired
- npm i -D http-proxy-middleware http-server

3. 创建config-override.js（实现antd的按需加载）

### React组件的演化

组件复用方式

- 类组件(class)
  - 优势：发展时间长，接收度广泛
  - 劣势：只能继承父类
  - 状态：传统模式，长期存在
- Mixin
  - 优势：可以复制任意对象的任意多个方法
  - 劣势：组件相互依赖、耦合，可能产生冲突，不利于维护
  - 状态：被抛弃
- 高阶组件(HOC)
  - 优势：利用装饰器模式，在不改变组件的基础上，动态地为其添加新的能力
  - 劣势：嵌套过多调试困难，需要遵循某些约定（不改变原始组件，透传props等）
  - 状态：能力强大，应用广泛
- Hooks
  - 优势：代替class，多个Hooks互不影响，避免嵌套地域，开发效率高
  - 劣势：切换到新思维需要成本
  - 状态：React的未来

### 数据请求

可使用http-server、http-proxy-middleware 搭配来进行数据的mock

### 实战篇 - API Server

项目初始化步骤：

- npm i -g express-generator
- express ts-express
- 修改所有`.js`文件为`.ts`
- npm i -D @types/node @types/express
- npm i mysql2
- npm i -D @types/node
- 导出excel
  - npm i excel-export

```
nodemon --watch routes/**/* -e ts --exec ts-node bin/server.ts 本地启动，本地开发的时候就不用去编译了，节省了编译的时间，发布的时候再去编译发布。
```

### 实战篇 - Vue

### 其他

1. 课程中演示用到的在线编码平台：https://tool.lu/coderunner/
2. 类型搜索地址：https://www.typescriptlang.org/dt/search?search=
   [npm displays packages with bundled TypeScript declarations](https://github.blog/changelog/2020-12-16-npm-displays-packages-with-bundled-typescript-declarations/)
3. ts RN 项目参考：https://github.com/akveo/react-native-ui-kitten
