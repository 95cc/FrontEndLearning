<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  methods: {
    handleChange(event: Event) {
      // `event` 隐式地标注为 `any` 类型
      console.log((event.target as HTMLInputElement).value)
    },
  },
})
</script>

<template>
  <input type="text" @change="handleChange" />
</template>
