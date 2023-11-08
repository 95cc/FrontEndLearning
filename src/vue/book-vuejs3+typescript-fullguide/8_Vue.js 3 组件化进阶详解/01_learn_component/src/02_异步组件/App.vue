<template>
  <div>
    App组件
    <Home />
    <AsyncCategory />
  </div>
</template>

<script>
import Loading from './Loading'
import Error from './Error'

// 1. 不会进行分包处理
// import { sum } from './utils/math.js'
// console.log(sum(1, 2))

// 2. 使用import函数导入math.js模块时，会进行分包处理
import('./utils/math.js').then((res) => {
  console.log(res.sum(2, 3))
})

import { defineAsyncComponent } from 'vue'
// 使用defineAsyncComponent函数实现异步加载，该函数支持两种类型的参数
// 1. 工厂函数：该工厂函数需要返回一个Promise对象
// 2. 对象类型：对异步函数进行配置

// 3. 以普通方式导入Home.vue组件，不会进行分包处理
import Home from './Home'
// 4.1 工厂函数： 使用defineAsyncComponent函数异步加载 AsyncCategory.vue组件，会进行分包处理
// const AsyncCategory = defineAsyncComponent(() => {
//   return import('./AsyncCategory.vue')
// })
// 4.2 对象类型
const AsyncCategory = defineAsyncComponent({
  // 4.2.1 需要异步加载的组件
  loader: () => import('./AsyncCategory.vue'),
  // 4.2.2 加载时显示Loading组件
  loadingComponent: Loading,
  // 4.2.3 加载失败时显示Error组件
  errorComponent: Error,
  // 4.2.4 在显示loadingComponent之前的延迟，默认值：200（单位ms）
  delay: 200,
  // 4.2.5 加载组件的时间超过设定值，将显示错误组件，默认值: Infinity(即永不超时，单位ms)
  timeout: 3000,
  // 4.2.6 定义组件是否可挂起，默认值：true
  suspensible: false, // false 代表异步组件可以退出Suspense控制，并始终控制自己的加载状态
  // 4.2.7 组件加载失败的回调
  /**
   * @param {*} error 错误信息对象
   * @param {*} retry 一个函数，用于指示当promise加载器reject时，加载器是否应该重试
   * @param {*} fail 一个函数，指示加载程序结束并退出
   * @param {*} attempts 允许的最大重试次数
   */
  onError: function (error, retry, fail, attempts) {
    if (error.message.match(/fetch/) && attempts <= 3) {
      // 请求发生错误时重试，最多可尝试3次
      retry()
    } else {
      // 注意，retry/fail就像promise的resolve/reject一样
      // 必须调用其中一个，才能继续错误处理
      fail()
    }
  },
})

export default {
  name: 'App',
  components: {
    Home,
    AsyncCategory,
    Loading,
    Error,
  },
  created() {},
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
