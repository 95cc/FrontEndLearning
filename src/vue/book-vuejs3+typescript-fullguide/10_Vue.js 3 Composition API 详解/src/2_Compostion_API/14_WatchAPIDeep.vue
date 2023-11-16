<script>
import { ref, reactive, watch } from 'vue'

export default {
  setup() {
    // 1. 监听响应式数组
    const names = reactive(['abc', 'cde', 'def'])
    watch(
      () => [...names],
      (newVal, oldVal) => {
        console.log('new:', newVal, 'old:', oldVal)
      }
    )

    // 2. 监听响应式对象
    const info = reactive({
      name: 'coder',
      age: 18,
      friend: {
        name: 'kobe',
      },
    })
    watch(
      () => ({ ...info }),
      (newVal, oldVal) => {
        console.log(newVal, oldVal)
      },
      {
        deep: true, // 深层监听
        immediate: true, // watch回调立即执行一次
      }
    )

    return {
      names,
      info,
    }
  },
}
</script>

<template>
  <div>
    <div>names: {{ names }}</div>
    <button @click="names.push('xxx')">增加names</button>

    <div>info: {{ info }}</div>
    <button @click="info.friend.name = 'james'">修改info</button>
  </div>
</template>
