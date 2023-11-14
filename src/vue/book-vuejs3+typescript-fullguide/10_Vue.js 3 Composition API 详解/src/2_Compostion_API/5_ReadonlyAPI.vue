<script>
import { reactive, ref, readonly } from 'vue'

export default {
  setup() {
    // 1. 普通对象
    const info1 = { name: 'why' }
    const readonlyInfo1 = readonly(info1)

    // 2. 响应式对象reactvie
    const info2 = reactive({
      name: 'why',
    })
    const readonlyInfo2 = readonly(info2)

    // 3. 响应式对象ref
    const info3 = ref('why')
    const readonlyInfo3 = readonly(info3)

    const updateState = () => {
      // 以下代码修改都会出现警告
      readonlyInfo1.name = 'coderwhy1'
      readonlyInfo2.name = 'coderwhy2'
      readonlyInfo3.name = 'coderwhy3'

      // 以下代码都可以修改
      info1.name = 'abc'
      info2.name = 'abc'
      info3.value = 'abc'
    }

    return {
      updateState,
    }
  },
}
</script>

<template>
  <div>
    <button @click="updateState">修改状态</button>
  </div>
</template>
