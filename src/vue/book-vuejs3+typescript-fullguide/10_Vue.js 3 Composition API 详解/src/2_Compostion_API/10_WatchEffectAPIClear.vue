<script>
import { ref, watchEffect } from 'vue'

export default {
  setup() {
    const age = ref(18)
    watchEffect((onInvalidate) => {
      console.log('age:', age.value)

      const timer = setTimeout(() => {
        console.log('模拟网络请求，网络请求成功')
      }, 2000)

      onInvalidate(() => {
        // 1. 监听到age变化或监听停止时，会执行这里的代码
        clearTimeout(timer)
        console.log('onInvalidate')
      })
    })

    return {
      age,
    }
  },
}
</script>

<template>
  <div>
    <h4>age: {{ age }}</h4>
    <button @click="age++">修改age</button>
  </div>
</template>
