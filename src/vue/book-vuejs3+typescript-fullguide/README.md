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
- 17. 后天管理系统
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
