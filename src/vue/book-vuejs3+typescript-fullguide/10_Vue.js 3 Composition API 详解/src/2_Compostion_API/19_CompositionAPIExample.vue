<script>
import { ref, computed } from 'vue'
export default {
  setup() {
    const counter = ref(100)
    const doubleCounter = computed(() => counter.value * 2)
    const increment = () => {
      counter.value++
    }
    const decrement = () => {
      counter.value--
    }

    return {
      counter,
      doubleCounter,
      increment,
      decrement,
    }
  },
}
</script>

<template>
  <div style="border: 1px solid gray">
    <div>当前计数：{{ counter }}</div>
    <div>当前计数*2：{{ doubleCounter }}</div>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
</template>
