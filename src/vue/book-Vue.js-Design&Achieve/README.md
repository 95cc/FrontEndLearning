# [Vue.js 设计与实现](https://book.douban.com/subject/35768338/)

## 第一篇（框架设计概览）

### 第1章 权衡的艺术

1. 命令式和声明式
   - 命令式：更加关注过程
   ```
   $('#app') // 获取div
     .text('hello world') // 设置文本内容
     .on('click', () => { alert('ok') }) // 绑定点击事件
   ```
   - 声明式：更加关注结果
   ```
     <div id="app" @click="() => alert('ok')">hello world</div>
   ```
2. 性能与可维护性的权衡（声明式代码的性能不优于命令式代码的性能）

   声明式代码的可维护性高，但是相比命令式，多了转换的过程，因此再保证可维护性的同时要确保性能随时最小化。

3. 虚拟DOM的性能到底如何？

   声明式的更新性能消耗 = 找出差异的性能消耗 + 直接修改的性能消耗

4. 运行时和编译时
   - 运行时框架：运行时动态化创建DOM元素并添加。例如：一个描述dom信息的对象（tag、children），一个render函数
   - 编译时框架：将HTML字符串直接编译成命令式过程的代码（即创建dom元素的原生JavaScript代码）。例如：[Svelte.js框架](https://github.com/sveltejs/svelte)。
   - 运行时+编译时：先将DSL(类html)编译成对象，然后在运行时使用render函数将编译后的对象动态转换成dom。 例如：[Vue.js 3](https://github.com/vuejs/core)

## 第二篇（响应系统）

## 第三篇（渲染器）

## 第四篇（组件化）

## 第五篇（编译器）

## 第六篇（服务端渲染）
