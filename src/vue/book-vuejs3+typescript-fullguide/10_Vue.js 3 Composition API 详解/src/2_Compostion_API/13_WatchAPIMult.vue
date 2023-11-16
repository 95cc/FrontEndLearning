<script>
import { ref, reactive, watch } from 'vue'

export default {
  setup() {
    // 1. 定义响应式对象
    const info = reactive({
      name: 'coder',
      age: 18,
    })
    const name = ref('coder')
    const age = ref(20)

    watch(
      [() => ({ ...info }), name, age],
      ([newInfo, newName, newAge], [oldInfo, oldName, oldAge]) => {
        console.log('new:', newInfo, newName, newAge)
        console.log('old:', oldInfo, oldName, oldAge)
      }
    )

    const changeData = () => {
      info.name = 'kobe'
      name.value = 'jack'
      age.value = 16
    }

    return {
      info,
      name,
      age,
      changeData,
    }
  },
}
</script>

<template>
  <div>
    <h4>info.name: {{ info.name }}, name: {{ name }}, age: {{ age }}</h4>
    <button @click="changeData">修改数据</button>
  </div>
</template>
