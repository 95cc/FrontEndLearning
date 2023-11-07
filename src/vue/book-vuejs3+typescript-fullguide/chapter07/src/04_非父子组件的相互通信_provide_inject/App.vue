<script>
import { computed } from 'vue'
import Home from './Home'

export default {
  name: 'App', // 添加name的好处：允许组件模板递归调用自身，以及方便调试组件。
  components: {
    Home,
  },
  data() {
    return {
      friends: ['jack', 'rose'],
    }
  },
  // 方式1
  // 在根组件中通过provide属性为子组件和孙子组件提供数据
  // provide: {
  //   name: 'why',
  //   age: 18,
  //   friends: ['jack', 'rose'],
  // },

  // 方式2 (错误写法)
  // provide: {
  //   name: 'why',
  //   age: 18,
  //   //  Cannot read properties of undefined (reading 'friends')
  //   friends: this.friends, // 在provide中使用的this是undefined，其获取到的this是模块顶层的this。在ES6模块中，顶层的this指向undefined.
  // },

  // 方式3
  provide() {
    return {
      name: 'why',
      age: 18,
      friends: this.friends,
      // friendLength: this.friends.length, // 不是响应式的
      friendLength: computed(() => this.friends.length),
    }
  },
  methods: {
    addFriend() {
      this.friends.push('tony')
    },
  },
}
</script>

<template>
  <div>
    <h2>Provide/Indect 依赖注入</h2>
    APP
    <Home style="margin-left: 10px" />

    <button @click="addFriend">addFriend</button>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
