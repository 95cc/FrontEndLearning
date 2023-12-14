<template>
  <div>
    Home Page
    <!-- <router-link class="btn" to="/home/message">消息页</router-link>
    <router-link class="btn" to="/home/shops">商品页</router-link>
    <router-view></router-view> -->
  </div>
</template>

<script>
import { useRoute } from 'vue-router'

export default {
  setup() {
    // 1. useRoute会返回当前路由信息，相当于在模板中使用 $route。useRoute必须在setup中调用
    const route = useRoute()
    console.log(route.name)
    console.log(route.meta)
  },
}
</script>

<style scoped>
.btn {
  margin: 4px;
  padding: 3px 5px;
  text-decoration: none;
  border: 1px dashed #ddd;
}
</style>
