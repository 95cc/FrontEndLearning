<script>
export default {
  // 孙子组件使用inject属性注入祖父组件
  inject: ['name', 'age', 'friends', 'friendLength'],
}
</script>

<template>
  <div class="home-content">
    HomeContent
    <p>{{ name }} - {{ age }} - {{ friends }} - {{ friendLength }}</p>
  </div>
</template>
