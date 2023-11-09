<script>
export default {
  data() {
    return {
      message: '我的NavBar中的message变量',
    }
  },
  methods: {
    sayHello() {
      console.log('sayHello: Hello NavBar')
    },
    geParentAndRoot() {
      console.log('$parent=', this.$parent)
      console.log('访问父组件(App)中的names变量=', this.$parent.names)
      console.log('$root=', this.$root)
    },
  },
}
</script>

<template>
  <div class="navbar" style="border: 1px solid gray">
    <h4>NavBar</h4>
    <button @click="geParentAndRoot">获取父组件和根组件实例对象</button>
  </div>
</template>
