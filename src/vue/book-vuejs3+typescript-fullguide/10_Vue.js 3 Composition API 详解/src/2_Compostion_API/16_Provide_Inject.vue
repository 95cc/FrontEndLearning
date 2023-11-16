<script>
import { provide, ref } from 'vue'
// ---
import Provide_Inject_sub from './17_Provide_Inject_sub.vue'

export default {
  components: {
    Provide_Inject_sub,
  },
  setup() {
    const name = 'coder' // 普通数据
    const age = 18
    let counter = ref(100) // 响应式数据
    // 1. 向子组件或孙子组件提供数据
    provide('name', name)
    provide('age', age)
    provide('counter', counter)

    return {
      name,
      age,
      counter,
    }
  },
}
</script>

<template>
  <div style="border: 1px solid gray">
    <div>{{ name }} - {{ age }}</div>
    <div>{{ counter }}</div>
    <button @click="counter++">counter+1</button>
  </div>

  <div>
    <Provide_Inject_sub />
  </div>
</template>
