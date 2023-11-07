<script>
export default {
  props: ['title', 'content'],
}
</script>

<template>
  <div class="show-message">
    <h4>{{ title }}</h4>
    <div>{{ content }}</div>
  </div>
</template>
