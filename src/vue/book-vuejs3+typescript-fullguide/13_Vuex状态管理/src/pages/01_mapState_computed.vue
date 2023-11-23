<template>
  <div class="border">
    <h4>Home: {{ $store.state.counter }}</h4>
    <h4>Home: {{ counter }}</h4>
    <h4>Name: {{ name }}</h4>
    <h4>Age: {{ hyAge }}</h4>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      firstName: 'cc ',
    }
  },
  // computed: {
  //   counter() {
  //     // 使用计算属性读取状态
  //     return this.$store.state.counter
  //   },
  // },
  // mapState函数接收对象类型参数
  computed: {
    // 🇨🇳🇨🇳🇨🇳 mapState接收对象类型
    ...mapState({
      counter: (state) => {
        // 这里的箭头函数不绑定this
        return state.counter
      },
      name(state) {
        // 普通函数会绑定this，这里的this是组件的实例
        return this.firstName + state.name
      },
      // key可自定义，这里自定义为hyAge
      // hyAge属性直接映射state中的age变量
      hyAge: 'age',
    }),
    // 🇨🇳🇨🇳🇨🇳 mapState接收数组类型
    // ...mapState(['counter', 'name', 'age']),
  },
}
</script>
