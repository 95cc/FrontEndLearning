<script>
// 父组件的样式会应用到子组件的根元素
import HelloWorld from './HelloWorld.vue'
// 子组件有多个根元素，可以避免父组件样式影响子组件的根元素
import HelloWorld2 from './HelloWorld2.vue'
// CSS Modules
import CssModules from './CssModulse'
// 在CSS中使用v-bind
import Css_v_bind from './Css_v_bind.vue'

export default {
  components: {
    HelloWorld,
    HelloWorld2,
    CssModules,
    Css_v_bind,
  },
}
</script>

<template>
  <h4>App Title</h4>
  <HelloWorld />
  <HelloWorld2 />
  <CssModules />
  <Css_v_bind />
</template>

<style scoped>
h4 {
  text-decoration: underline;
}

:deep(h4) {
  color: orange;
}

:deep(.msg) {
  text-decoration: underline;
}
</style>
