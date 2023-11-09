<script>
export default {
  data() {
    return {
      message: 'say hello',
    }
  },
  methods: {
    changeMessage() {
      this.message = '你好啊，李银河'
    },
  },
  // 声明周期钩子函数
  beforeCreate() {
    console.log('home beforeCreate')
  },
  created() {
    console.log('home created')
  },
  beforeMount() {
    console.log('home beforeMount')
  },
  mounted() {
    console.log('home mounted')
  },
  beforeUnmount() {
    console.log('home beforeUnmount')
  },
  unmounted() {
    console.log('home unmounted')
  },
  beforeUpdate() {
    console.log('home beforeUpdate', this.$refs.title.innerHTML)
  },
  updated() {
    console.log('home updated', this.$refs.title.innerHTML)
  },
}
</script>

<template>
  <div class="home">
    <h4 ref="title">Home组件: {{ message }}</h4>
    <button @click="changeMessage">修改Home组件的message</button>
  </div>
</template>
