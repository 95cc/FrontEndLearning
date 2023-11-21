<template>
  <div class="border">
    <h4>下面h4元素高度 {{ msgHeight }}</h4>
    <h4 style="width: 80px" ref="titleRef">{{ message }}</h4>
    <button @click="addMsgContent">添加内容</button>
  </div>
</template>

<script>
import { ref, nextTick } from 'vue'

export default {
  setup() {
    const message = ref('')
    const msgHeight = ref(-1)
    const titleRef = ref(null)
    const addMsgContent = () => {
      message.value = '更新DOM'

      nextTick(() => {
        console.log('获取到h4元素的高度 ', titleRef.value.offsetHeight)
      })
    }

    return {
      message,
      msgHeight,
      titleRef,
      addMsgContent,
    }
  },
}
</script>
