<script>
import { ref, watchEffect } from 'vue'

export default {
  setup() {
    const titleRef = ref(null)

    watchEffect(
      () => {
        console.log(titleRef.value)
      },
      {
        flush: 'post', // 修改副作用函数的执行时机，支持 pre、post、sync
      }
    )

    return {
      titleRef,
    }
  },
}
</script>

<template>
  <div>
    <!-- h4元素挂在完成后，会自动赋值titleRef内部值中 -->
    <h4 ref="titleRef">哈哈哈</h4>
  </div>
</template>
