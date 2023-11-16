<script>
import { ref, watchEffect } from 'vue'

export default {
  setup() {
    const age = ref(18)
    // 1. watchEffect会自动收集响应式依赖，默认先执行一次，但是获取不到新值和旧值
    const stop = watchEffect(() => {
      // 2. 监听age的变化，age变化后会再次执行
      console.log('age:', age.value)
    })

    const stopWatchEffect = () => {
      age.value++
      if (age.value >= 25) {
        stop()
      }
    }

    return {
      age,
      stopWatchEffect,
    }
  },
}
</script>

<template>
  <div>
    <h4>age: {{ age }}</h4>
    <button @click="age++">增加age</button>
    <div>
      <button @click="stopWatchEffect">
        增加age, 并且到25停止监听 watchEffect
      </button>
    </div>
  </div>
</template>
