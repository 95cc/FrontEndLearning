<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
// 1. 使用相对路径，导入组件
// import HelloWorld from './components/HelloWorld.vue'
// 2. 使用@别名，导入组件
// import HelloWorld from '@/components/HelloWorld.vue'
// 3. 使用components别名，导入组件
import HelloWorld from 'components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
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
