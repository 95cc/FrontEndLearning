<script>
import { inject, ref } from 'vue'

export default {
  setup() {
    const name = inject('name') // 普通数据
    const age = inject('age')
    let counter = inject('counter') // 响应式数据

    const subIncrement = () => {
      counter.value++
    }

    return {
      name,
      age,
      counter,
      subIncrement,
    }
  },
}
</script>

<template>
  <div style="border: 1px solid gray">
    sub组件
    <div>{{ name }} - {{ age }}</div>
    <div>{{ counter }}</div>
    <button @click="subIncrement">counter+1</button>
  </div>
</template>
