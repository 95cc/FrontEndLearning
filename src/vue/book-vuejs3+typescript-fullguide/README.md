# 【读书笔记】[《Vue.js 3 + TypeScript 完全指南》](https://book.douban.com/subject/36560742/) 王红元、刘军 著

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

### vscode插件推荐

- Theme
  - [Theme](https://marketplace.visualstudio.com/items?itemName=tal7aouy.theme): vscode主题。
- [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag): 自动添加HTML/XML关闭标签。
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag): 自动重命名成对的HTML/XMl。
- [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight): 高亮显示在代码中使用的颜色值
- [open in browser](https://marketplace.visualstudio.com/items?itemName=techer.open-in-browser): 在浏览器中打开。
- vscoe文件icon

  - [VSCode Great Icons](https://marketplace.visualstudio.com/items?itemName=emmanuelbeziat.vscode-great-icons): 文件图标。
  - [Material Theme Icons](https://marketplace.visualstudio.com/items?itemName=Equinusocio.vsc-material-theme-icons): 文件图标。
  - [vscode-icons](https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons): 文件图标。

- [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2): 高亮代码块中相互匹配的括号。

  已不再维护。已集成到vscode中。打开方式：打开设置，输入 `@id:editor.bracketPairColorization.enabled @id:editor.guides.bracketPairs`

- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer): 启动本地开发服务器，为静态和动态页面提供实时加载功能。

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
