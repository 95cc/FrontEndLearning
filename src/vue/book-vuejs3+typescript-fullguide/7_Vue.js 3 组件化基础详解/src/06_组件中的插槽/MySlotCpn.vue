<script>
export default {}
</script>

<template>
  <div class="my-slot-cpn">
    <div class="header">header</div>
    <!-- 中间显示的内容用slot占位，因为内容是不确定的 -->

    <!-- <slot name="default"></slot> -->
    <!-- 这个是上面的简写 -->
    <slot> 默认内容，只会在没有提供插入的内容时，才会显示 </slot>

    <div class="footer">footer</div>
  </div>
</template>

<style scoped>
.my-slot-cpn {
  border: 1px solid gray;
  margin-bottom: 10px;
}
</style>
