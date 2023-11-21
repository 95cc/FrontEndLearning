<script>
import { ref, onMounted } from 'vue'

export default {
  setup() {
    const input = ref(null)
    onMounted(() => {
      // 默认方式：当挂载完成后自动获取焦点
      input.value.focus()
    })

    return {
      input,
    }
  },
}
</script>

<template>
  <div style="border: 1px solid #ddd; margin: 8px">
    <p>默认方式：在mounted中主动调用focus()</p>
    <input type="text" ref="input" />
  </div>
</template>
