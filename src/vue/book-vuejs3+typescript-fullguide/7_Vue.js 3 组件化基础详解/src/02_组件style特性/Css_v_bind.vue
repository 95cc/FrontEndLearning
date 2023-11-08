<script>
export default {
  data() {
    return {
      color1: 'red',
      color2: 'orange',
    }
  },
  computed: {
    color3() {
      return 'yellow'
    },
  },
}
</script>

<template>
  <div class="example">
    <h4 class="red">hello should be red</h4>
    <h4 class="orange">hello should be orange</h4>
    <h4 class="yellow">hello should be yellow</h4>
  </div>
</template>

<style scoped>
.red {
  /* 动态绑定样式，也属于局部样式。与style标签是否绑定scoped属性没有关系 */
  color: v-bind(color1);
}
.orange {
  color: v-bind(color2);
}
.yellow {
  color: v-bind(color3);
}
</style>
