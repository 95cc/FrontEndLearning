<template>
  <div class="border">
    <h4>下面h4元素高度 {{ msgHeight }}</h4>
    <h4 style="width: 80px" ref="titleRef">{{ message }}</h4>
    <button @click="addMsgContent">添加内容</button>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const message = ref('')
    const msgHeight = ref(-1)
    const titleRef = ref(null)
    const addMsgContent = () => {
      message.value += '更新DOM'
      // 单击按钮修改h4元素内容后，立即获取高度
      const height = titleRef.value.offsetHeight
      msgHeight.value = height
      console.log('获取到h4元素的高度 ', height)
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
