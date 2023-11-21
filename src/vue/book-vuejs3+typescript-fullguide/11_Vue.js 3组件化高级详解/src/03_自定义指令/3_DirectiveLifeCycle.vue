<template>
  <div style="border: 1px solid #ddd; margin: 8px">
    <button v-why v-if="counter < 2" @click="counter++">当前计数：</button
    >{{ counter }}
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  directives: {
    why: {
      created() {
        console.log('directive why created')
      },
      beforeMount() {
        console.log('directive why beforeMount')
      },
      mounted() {
        console.log('directive why mounted')
      },
      beforeUpdate() {
        console.log('directive why beforeUpdate')
      },
      updated() {
        console.log('directive why updated')
      },
      beforeUnmount() {
        console.log('directive why beforeUnmount')
      },
      unmounted() {
        console.log('directive why unmounted')
      },
    },
  },
  setup() {
    const counter = ref(0)
    return { counter }
  },
}
</script>
