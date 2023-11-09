<template>
  <div>
    <!-- 1. 在h4上通过ref注册一个元素引用 -->
    <h4 ref="title">App中的h4元素</h4>
    <!-- 2. 在NavBar上通过ref注册一个模板引用 -->
    <NavBar ref="navBar" />

    <button @click="btnClick">获取h4元素对象和NavBar组件实例</button>
  </div>
</template>

<script>
import NavBar from './NavBar'

export default {
  name: 'App',
  components: {
    NavBar,
  },
  data() {
    return {
      names: ['coder', 'why'],
    }
  },
  methods: {
    btnClick() {
      // 通过this.$refs访问已注册的元素引用（title）
      console.log('h4元素对象=', this.$refs.title)
      // 访问已注册的模板引用 (NavBar)
      console.log('NavBar组件实例', this.$refs.navBar)
      // 访问NavBar组件实例的message变量
      console.log(
        '访问NavBar组件实例的message变量: ',
        this.$refs.navBar.message
      )
      // 调用NavBar组件实例的sayHello方法
      this.$refs.navBar.sayHello()
      // $el: 获取NavBar组件实例的DOM元素对象
      console.log(this.$refs.navBar.$el)
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
