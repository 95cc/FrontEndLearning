<script>
import Home from './Home'

export default {
  name: 'App',
  components: {
    Home,
  },
  data() {
    return {
      isShowHome: true,
    }
  },
}
</script>

<template>
  <div>
    App
    <button @click="isShowHome = !isShowHome">控制Home组件的创建和销毁</button>
    <template v-if="isShowHome">
      <Home />
    </template>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
