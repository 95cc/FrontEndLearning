<template>
  <div class="about">
    About Page
    <!-- 使用template直接获取query参数 -->
    <p>{{ $route.query.name }} - {{ $route.query.age }}</p>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'

export default {
  setup() {
    const route = useRoute()

    console.log(route.name, route.meta)
    console.log(route.query, route.query.name, route.query.age)

    return {}
  },
}
</script>
