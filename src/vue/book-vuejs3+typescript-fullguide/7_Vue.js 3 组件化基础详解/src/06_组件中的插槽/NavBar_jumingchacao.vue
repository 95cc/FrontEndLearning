<script>
export default {
  props: {
    name: String,
  },
}
</script>

<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
  <div class="footer">
    <slot :name="name"></slot>
  </div>
</template>

<style scoped>
.nav-bar {
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid gray;
}
.center {
  flex: 1;
  text-align: center;
}
</style>
