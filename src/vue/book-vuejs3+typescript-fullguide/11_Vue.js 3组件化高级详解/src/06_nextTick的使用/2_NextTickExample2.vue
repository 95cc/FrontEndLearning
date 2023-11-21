<template>
  <div class="border">
    <div>计数器： {{ counter }}</div>
    <button @click="counter++">+1</button>
    <h4 style="width: 80px" ref="titleRef">{{ message }}</h4>
    <button @click="addMsgContent">添加内容</button>
  </div>
</template>

<script>
import { ref, onUpdated } from 'vue'

export default {
  setup() {
    const counter = ref(0)
    const message = ref('')
    const titleRef = ref(null)
    const addMsgContent = () => {
      message.value += '更新DOM'
    }

    onUpdated(() => {
      console.log('获取到h4元素的高度 ', titleRef.value.offsetHeight)
    })

    return {
      counter,
      message,
      titleRef,
      addMsgContent,
    }
  },
}
</script>
