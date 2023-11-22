<template>
  <div>UserPage: {{ $route.params.username }} = {{ $route.params.id }}</div>
</template>

<script>
import { useRoute } from 'vue-router'

export default {
  created() {
    console.log('created:', this.$route.params.username, this.$route.params.id)
  },
  setup() {
    const route = useRoute()
    console.log('setup:', route.params.username, route.params.id)
  },
}
</script>
