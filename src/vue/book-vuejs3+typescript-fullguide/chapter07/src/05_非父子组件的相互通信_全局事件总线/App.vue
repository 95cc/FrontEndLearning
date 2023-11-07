<template>
  <div>
    <h1>全局事件总线 (使用mitt或tiny-emitter: npm i mitt)</h1>
    App
    <Home />
    <About />
  </div>
</template>

<script>
import Home from './Home.vue'
import About from './About.vue'

export default {
  name: 'App', // 添加name的好处：允许组件模板递归调用自身，以及方便调试组件。
  components: {
    Home,
    About,
  },
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
