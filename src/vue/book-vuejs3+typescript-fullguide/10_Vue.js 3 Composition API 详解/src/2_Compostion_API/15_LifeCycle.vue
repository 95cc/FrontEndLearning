<script>
import { onMounted, onUpdated, onUnmounted, ref } from 'vue'

export default {
  setup() {
    const counter = ref(0)
    const increment = () => counter.value++

    onMounted(() => {
      console.log('Mounted1')
    })
    onMounted(() => {
      console.log('Mounted2')
    })
    onUpdated(() => {
      console.log('onUpdated')
    })
    onUnmounted(() => {
      console.log('onUnmounted')
    })

    return {
      counter,
      increment,
    }
  },
}
</script>

<template>
  <div>
    <div>counter: {{ counter }}</div>
    <button @click="increment">单击+1</button>
  </div>
</template>
