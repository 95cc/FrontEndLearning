<script>
export default {
  // props: ['title', 'content'],
  props: {
    title: String,
    content: {
      type: String,
      required: true,
      default: '我的内容的默认值',
    },
  },
}
</script>

<template>
  <div class="show-message">
    <h4>{{ title }}</h4>
    <div>{{ content }}</div>
  </div>
</template>
