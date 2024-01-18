# Vue.js官网学习

## [深度指南](https://cn.vuejs.org/guide/introduction.html)

### 1. 预备学习

1. [JavaScript](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Language_overview)
2. [HTML](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Introduction_to_HTML)
3. [CSS](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/First_steps)

### 2. 简介

1. 什么是Vue：基于标准 HTML、CSS 和 JavaScript 构建，并提供了一套声明式的、组件化的编程模型，帮助你高效地开发用户界面。
2. 声明式渲染：Vue 基于标准 HTML 拓展了一套模板语法，使得我们可以声明式地描述最终输出的 HTML 和 JavaScript 状态之间的关系。
3. 响应性：Vue 会自动跟踪 JavaScript 状态并在其发生变化时响应式地更新 DOM。
4. 渐进式框架：可以被逐步集成，根据需求灵活选择使用的方式。

   - 无需构建步骤，渐进式增强静态的 HTML
   - 在任何页面中作为 Web Components 嵌入
   - 单页应用 (SPA)
   - 全栈 / 服务端渲染 (SSR)
   - Jamstack / 静态站点生成 (SSG)
   - 开发桌面端、移动端、WebGL，甚至是命令行终端中的界面

5. [单文件组件](https://cn.vuejs.org/guide/introduction.html#single-file-components)：一种类似 HTML 格式的文件来书写 Vue 组件。
6. [API风格](https://cn.vuejs.org/guide/introduction.html#api-styles)：选项式API（Options API）、组合式API（Composition API）

### 3. [使用 Vue 的多种方式](https://cn.vuejs.org/guide/extras/ways-of-using-vue.html)

### 4. 快速上手

1. 创建Vue应用

   ```
   npm create vue@latest # 会安装并执行 create-vue，后面就可以直接通过 create-vue xxx 来创建项目
   ```

2. 通过CDN使用Vue（全局构建版本）

   ```
      <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

      <div id="app">{{ message }}</div>

      <script>
      const { createApp } = Vue

      createApp({
         data() {
            return {
            message: 'Hello Vue!'
            }
         }
      }).mount('#app')
      </script>
   ```

3. 通过CDN使用Vue（ES构建版本，[ES模块](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Modules)）

   ```
      <div id="app">{{ message }}</div>

      <script type="module">
      import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

      createApp({
         data() {
            return {
            message: 'Hello Vue!'
            }
         }
      }).mount('#app')
      </script>
   ```

4. 通过CDN使用Vue（ES构建版本，启用Import maps, [caniuse-import-maps](https://caniuse.com/import-maps)）

   ```
      <script type="importmap">
      {
         "imports": {
            "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
         }
      }
      </script>

      <div id="app">{{ message }}</div>

      <script type="module">
      import { createApp } from 'vue'

      createApp({
         data() {
            return {
            message: 'Hello Vue!'
            }
         }
      }).mount('#app')
      </script>
   ```
