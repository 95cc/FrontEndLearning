<script>
import { reactive, ref, watch } from 'vue'

export default {
  setup() {
    const info = reactive({ name: 'why', age: 18 })
    const info1 = reactive({ name: 'why', age: 18 })
    const name = ref('why')

    // 1. 传入一个getter函数，该函数引用响应式对象info
    watch(
      () => info.name,
      (newVal, oldVal) => {
        console.log('newVal:', newVal, 'oldVal:', oldVal)
      }
    )

    // 2. 传入reactive函数返回的响应式对象
    watch(info1, (newVal, oldVal) => {
      console.log('newVal:', newVal, 'oldVal:', oldVal)
    })

    // 3. 监听ref对象
    watch(name, (newVal, oldVal) => {
      console.log('newVal:', newVal, 'oldVal:', oldVal)
    })

    const changeData = () => {
      info.name = 'kobe'
    }
    const changeData1 = () => {
      info1.name = 'kobe'
    }

    return {
      info,
      changeData,
      info1,
      changeData1,
      name,
    }
  },
}
</script>

<template>
  <div>
    <h4>案例1: watch函数监听的数据源为一个getter函数</h4>
    <div>info.name: {{ info.name }}</div>
    <button @click="changeData">修改info.name</button>

    <h4>案例2: watch函数监听的数据源为reactive函数返回的响应式对象</h4>
    <div>info1.name: {{ info1.name }}</div>
    <button @click="changeData1">修改info1.name</button>

    <h4>案例3: watch函数监听的数据源为ref函数返回的响应式对象</h4>
    <div>name: {{ name }}</div>
    <button @click="name = 'abc'">修改name</button>
  </div>
</template>
