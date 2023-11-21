<script>
import { ref, onMounted } from 'vue'

export default {
  directives: {
    focus: {
      mounted(el, bindings) {
        console.log('local directive: focus mounted')
        el.focus()
      },
    },
  },
}
</script>

<template>
  <div style="border: 1px solid #ddd; margin: 8px">
    <p>自定义局部指令</p>
    <input type="text" v-focus />
  </div>
</template>
