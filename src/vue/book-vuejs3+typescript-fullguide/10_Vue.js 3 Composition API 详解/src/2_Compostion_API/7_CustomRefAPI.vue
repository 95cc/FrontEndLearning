<script>
// import { ref } from 'vue'
import useDebounceRef from './hooks/useDebounceRef'

export default {
  setup() {
    // const message = ref('hello world') // 普通的响应式对象
    const message1 = useDebounceRef('hello world')

    return {
      message1,
    }
  },
}
</script>

<template>
  <div>
    <input v-model="message1" />
    <h4>{{ message1 }}</h4>
  </div>
</template>
