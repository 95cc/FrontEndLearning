<script>
import { reactive, ref } from 'vue'

export default {
  setup() {
    const counter = ref(100)
    const increment = () => {
      counter.value++
      console.log(counter.value)
    }

    // 1. 定义响应式数据
    const newCounter = ref(100)
    // 2. 普通对象包含ref响应式对象
    const info = {
      newCounter,
    }
    // 3. reactive响应式对象包含ref响应式对象
    const reactiveInfo = reactive({ newCounter })
    const newIncrement = () => {
      newCounter.value++
      console.log(newCounter.value)
    }

    return {
      counter,
      newCounter,
      info,
      reactiveInfo,
      increment,
      newIncrement,
    }
  },
}
</script>

<template>
  <div class="reactive-api">
    RefAPI组件
    <h4>当前计数：{{ counter }}</h4>
    <button @click="increment">+1</button>

    <hr />
    RefAPIOther组件 (演示ref的浅层解包)
    <h4>newCounter 当前计算：{{ newCounter }}</h4>
    <!-- info中的ref对象可以自动解包 -->
    <h4>info.newCounter 当前计算：{{ info.newCounter }}</h4>
    <!-- reactiveInfo中的ref对象可以自动解包 -->
    <h4>reactiveInfo.newCounter 当前计算：{{ reactiveInfo.newCounter }}</h4>
    <button @click="newIncrement">+1</button>
  </div>
</template>
