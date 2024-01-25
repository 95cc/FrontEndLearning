# [《Vue.js 3 + TypeScript 完全指南》](https://book.douban.com/subject/36560742/) 王红元、刘军 著

## Vue.js CDN: https://unpkg.com/vue@3/dist/vue.global.js

## 章节概览

- 1. 邂逅和初体验 Vue.js
- 2. 模板语法和内置指令
- 3. Vue.js 3 的Options API
- 4. v-model和表单输入
- 5. Vue.js 3 组件化开发
- 6. 前端工程化
- 7. Vue.js 3 组件化基础详解
- 8. Vue.js 3 组件化进阶详解
- 9. Vue.js 3 实现过渡动画
- 10. Vue.js 3 Composition API 详解
- 11. Vue.js 3 组件化高级详解
- 12. Vue Router 路由
- 13. Vuex 状态管理
- 14. TypeScript 的基础详解
- 15. TypeScript 的进阶详解
- 16. 第三方库的集成与使用
- 17. 后台管理系统
- 18. 自动化部署
- 19. 手写 Mini-Vue.js 3 框架

## 第1章 邂逅和初体验 Vue.js

1. Vue.js 2的缺点 (2023-12-31不再维护, [Vue.js2](https://github.com/vuejs/vue))
   - 对TypeScript的支持不友好
   - Mixin混入缺陷
   - 响应式系统缺陷：Object.definedProperty无法劫持和监听对象添加或删除属性时的变化
   - 逻辑零散：分散到多个属性中，代码复杂了，逻辑会变得零散
2. Vue.js 3带来的新变化

   1. monorepo源码管理(将许多项目的代码存储在同一个repository中)
   2. 采用TypeScript进行重构
   3. 采用Proxy进行数据劫持

      - Vue.js 2使用的Object.definedProperty，无法劫持属性的添加/删除，必须用vm.$set和vm.$delete黑科技方法
      - Vue.js 3使用Proxy，可以劫持set/set/in/delete

   4. 编译阶段的优化

      - 生成Block Tree: 一个基于模板静态分析的数据结构，用于描述模板和其子模板之间的关系，从而提高渲染效率。
      - slot 编译优化: 对非动态slot中属性的更新，只会触发子组件的更新。
      - diff 算法优化:

   5. Composition API
   6. 移除一些非必要API: $on、$off和$once，移除了filter和内联模板等特性。

3. VSCode插件推荐

- Theme

  - [Theme](https://marketplace.visualstudio.com/items?itemName=tal7aouy.theme): vscode主题。

- [书籍推荐-Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag): 自动添加HTML/XML关闭标签。
- [书籍推荐-Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag): 自动重命名成对的HTML/XMl。
- [书籍推荐-Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight): 高亮显示在代码中使用的颜色值
- [书籍推荐-open in browser](https://marketplace.visualstudio.com/items?itemName=techer.open-in-browser): 在浏览器中打开。
- vscode文件icon

  - [VSCode Great Icons](https://marketplace.visualstudio.com/items?itemName=emmanuelbeziat.vscode-great-icons): 文件图标。
  - [Material Theme Icons](https://marketplace.visualstudio.com/items?itemName=Equinusocio.vsc-material-theme-icons): 文件图标。
  - [书籍推荐-vscode-icons](https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons): 文件图标。

- [书籍推荐-Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2): 高亮代码块中相互匹配的括号。

  已不再维护。已集成到vscode中。打开方式：打开设置，输入 `@id:editor.bracketPairColorization.enabled @id:editor.guides.bracketPairs`

- [书籍推荐-Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer): 启动本地开发服务器，为静态和动态页面提供实时加载功能。

4. Vue.js 3的安装和使用方式

   1. 通过CDN。 [参考](./1_邂逅和初体验%20Vue.js/01_Vue3的CDN方式引入.html)
   2. 下载Vue.js 3 js文件，手动引入。 [参考](./1_邂逅和初体验%20Vue.js/02_Vue3的源码方式引入.html)
   3. 通过npm包管理工具安装
   4. 通过Vue CLI等脚手架创建Vue.js 3项目

5. MVVM架构模式:

   - Model: 模型层，提供模型和数据
   - View: 视图层，用于编写页面布局
   - ViewModel: 负责把Model层的数据绑定到View层，将View层产生的DOM事件绑定到Model层

6. createApp的对象参数
7. VSCode生成代码片段: https://snippet-generator.app/

## 第2章 模板语法和内置指令

1. 插值语法 {{}}
2. 基本指令
   1. v-once: 指定元素或组件只渲染一次
   2. v-text: 用于更新元素的textContent。(等价于插值语法)
   3. v-html: 解析html字符串
   4. v-pre: 跳过元素及其子元素的编译过程，加快编译速度
   5. v-cloak: 隐藏未编译的mustache语法的标签，直到组件实例完成编译
3. v-bind
   - v-bind:xxx
   - :xxx
   - v-bind:[name]
   - :[name]
   - v-bind:"xxxObj"
   - :="xxxObj"
4. v-on
   - v-on:click
   - @click
   - @click.stop // 修饰符
   - v-on:keyup.enter
   - @keyup.enter
5. 条件渲染: v-if、v-else-if、v-else、v-show
6. 列表渲染: v-for
7. **key和diff算法**
   - 有key: [patchKeyedChildren](https://github.com/vuejs/core/blob/main/packages/runtime-core/src/renderer.ts)
   - 无key: [patchUnKeyedChildren](https://github.com/vuejs/core/blob/main/packages/runtime-core/src/renderer.ts)

## 第3章 Vue.js3的Options API

1. 计算属性 (有缓存)
   ```
   computed: {
    fullName() {
      return this.firstName + this.lastName
    },
    fullName2: {
      get: function() {
        return this.firstName + this.lastName
      },
      set: functino(newVal) {
        const names = newVal.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
      }
    }
   }
   ```
2. 监听器watch

   ```
   created() {
    // 使用watchAPI监听
    this.$watch('f',
      function(newVal, oldVal) {},
      {
        deep: true,
        immediate: true
      }
    )
   },
   watch: {
    // funtion语法
    a: function(newVal, oldVal) {},
    // 对象语法
    b: {
      handler(newVal, oldVal) {}
    }
    // 配置选项
    c: {
      handler(newVal, oldVal) {},
      // 是否深度监听对象或数组中每个属性的变换，默认false
      deep: true,
      // 是否立即执行回调函数，默认false
      immediate: true
    },
    // 字符串语法: d发生变化时，调用 someMethod 方法
    d: 'someMethod',
    // 数组语法: 传入回调数组，依次调用
    e: [
      'handler1',
      function handler2(newVal, oldVal) {},
      {
        handler: function(newVal, oldVal) {}
      }
    ],
    // 监听对象中的某个属性
    'g.h': function(newVal, oldVal) {}
   }
   ```

## 第10章 Vue.js 3 Composition API详解

本章小结

1. Mixin混入
   是Vue.js 2和Vue.js 3都支持的一种组件逻辑复用的功能，一个Mixin对象可以包含任何组件选项。当组件使用Mixin对象时，所有Mixin对象的选项将被混合到该组件本身的选项中。
2. setup函数
   Vue.js 3新增的选项，可以用于替代之前大部分选项，比如 methods、computed、watch、data、生命周期等。
3. 数据响应式API
   在setup函数中定义响应式数据时，需要使用Vue.js 3提供的响应式API: reactive和ref。
4. 计算属性
   在Options API中，使用computed选项编写计算属性；在Composition API中，需在setup函数中使用computed函数编写一个计算属性。
5. 监听器
   在Options API中，使用watch选项编写监听器；在Composition API中，需在setup函数中使用watchEffect和watch函数编写监听器。其中，watchEffect函数用于自动收集响应式数据，watch函数需手动指定监听源。
6. 生命周期
   在setup中编写生命周期函数时，需从vue中导入onBeforeMount、onMounted、onUpdated、onUnmounted等。
7. Provide/Inject
   在Options API中，非父子间通信可使用provide/inject选项来实现；在Composition API中，需在setup函数中使用provide/inject函数来实现。
8. <script setup>语法
   在Vue.js 3中，除了可在setup函数中使用Composition API，还可以使用<script setup>语法糖，在script顶层编写setup相关的代码。

## 第11章 Vue.js 3 组件化高级详解

本章小结

1. render函数
   Vue.js 3支持在render函数中用jsx语法编写页面
2. 自定义指令
   使用directive方法注册全局指令，在组件中用directives选择注册局部指令。
3. teleport组件
   teleport为Vue.js 3内置组件，使用to属性，可将组件挂载到id='app'之外的元素上。
4. Vue.js 3 插件
   插件可以向Vue.js 3全局添加一些功能。如：全局方法、属性、指令、mixin和组件等。插件支持对象类型(必须有一个install函数)和函数类型
5. nextTick的实现原理
   nextTick可将回调推迟到下一个DOM更新周期之后执行。nextTick内部用Promise包裹回调函数，将回调函数加入微任务队列中。

## 第12章 Vue Router 路由

本章小结

1. 前端路由实现2种方式：hash模式、history模式。
2. Vue Router基本使用：通过createRouter函数创建路由对象，接收routes路由数组及history路由模式对象。通过app.use安装路由对象。通过<router-view>占位，来显示路由组件。
3. 进阶使用：动态路由、动态添加路由、动态删除路由、嵌套路由、编程式导航、导航守卫等。

## 第13章 VueX 状态管理

本章小结

1. state: 可通过$store.state或useStore获取状态，也可通过mapState辅助函数获取。
2. getters: 类似store的计算属性，可通过$store.getters 或 mapGetters辅助函数获取。
3. mutations: 更改store状态的唯一方法是提交mutation, 可通过$store.commit 或 mapMutations辅助函数触发提交mutation。
4. actions: action提交的是mutation，并支持异步操作，可通过$store.dispatch或mapActions辅助函数触发action。
5. modules: Vuex允许将store分割成多个模块。每个模块拥有自己的state、mutation、action、getter，甚至嵌套子模块，这样可以更好地组织和管理状态。

## 第14章 TypeScript的基础详解 (npm i typescript -g)

1. 使用webpack搭建TypeScript运行环境 (看链接14-1中的文章)
2. 使用ts-node库搭建TypeScript运行环境
   ```
   1. 全局安装ts-node工具库
      npm install ts-node -g
   2. ts-node依赖 tslib和@types/node
      npm install tslib @types/node -g
   ```

本章小结

1. JavaScript数据类型: number、boolean、string、array、object、null、undefined、symbol
2. TypeScript数据类型: any、unknown、void、never、tuple
3. TypeScript类型补充: 函数参数、返回值、对象类型、联合类型、类型断言、字面量类型、类型缩小
4. TypeScript函数: 函数类型、函数参数、可选参数、默认参数、剩余参数、this的类型、函数重载

## 第15章 TypeScript的进阶详解

本章小结

1. TypeScirpt类的使用: 类的定义、继承、多态、成员修饰符、只读属性、访问器等
2. TypeScript接口的使用: 接口的声明、索引类型、函数类型、接口继承、交叉类型等
3. TypeScript枚举和泛型: 枚举类型的使用、认识泛型、泛型接口、泛型类、泛型约束等
4. TypeScript模块和命名空间: 模块化开发/使用、命名空间的认识/使用等
5. TypeScript类型声明: 类型查找规则、声明变量/函数/类/模块等
6. TypeScript编译器的配置: 包括tsconfig.json文件的创建、tsconfig文件常见属性的详解

## 第16章 第三方库的集成与使用

本章小结

1. Vue ClI: 创建vue+ts项目
2. Vue Router: 路由组件
3. Vuex: 状态管理组件
4. Element Plus: UI组件
5. axios: 网络库
6. ECharts: 图表库

## 第17章 后台管理系统

本章小结

1. 项目创建: vue create xxx (+ ts)
2. 开发规范: 编辑器规范、prettier代码格式化、ESLint 代码校验、编码规范等
3. 集成3方库: Vue Router、Vuex、Element Plus 按需引入、axios封装等
4. 功能模块: 登录面板、表单验证、菜单组件、动态注册路由、高级检索、表格列表组件等

## 第18章 自动化部署

本章小结

1. 项目部署和DevOps: 传统开发模式、DevOps开发模式、持续集成、持续交付、自动化部署等
2. 云服务的购买和使用: 阿里云的云服务器ECS(购买、连接、安装软件)等
3. Nginx手动部署项目: Nginx安装和配置、Vue.js 3项目打包和上传
4. Jenkins自动化部署: Jenkins安装、Jenkins插件安装、编写自动化部署任务等

## 第19章 手写 Mini-Vue.js 3框架

本章小结

1. VNode: Vue.js3框架会对真实的元素节点进行抽象，将其抽象成VNode
2. 虚拟DOM: 多个VNode节点组成一棵树的结构时，便形成了虚拟DOM
3. Runtime模块: 渲染系统，负责将VNode转换成真实DOM，并将其挂载到DOM上
4. Reactivity模块: 响应式系统，负责数据劫持和依赖收集
   响应式系统原理包括：响应式思想、依赖收集系统，以及Vue.js 2和Vue.js 3响应式系统的实现
5. 应用程序入口: 负责创建App实例和挂载应用到页面的DOM上
6. Mini-Vue.js 3: 实现了一个精简版的Mini-Vue.js 3框架，其中包含渲染系统、响应式系统和应用程序入口模块
