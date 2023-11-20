<template>
  <div>
    <h2>1. render函数</h2>
    <h3>1.1 h函数的基本使用</h3>
    <RenderExample class="border" />
    <RenderExample_Setup class="border" />
    <h3>1.2 render函数实现计数器</h3>
    <RenderCounter class="border" />
    <h3>1.3 setup函数实现计数器</h3>
    <RenderSetupCounter class="border" />
    <h3>1.4 在render函数中实现插槽</h3>
    <RenderSlot />
    <h3>1.5 组件的JSX语法</h3>
    <RenderJSX />
  </div>
</template>

<script>
import RenderExample from './01_render函数的使用/01_RenderExample'
import RenderExample_Setup from './01_render函数的使用/02_RenderExample_Setup'
import RenderCounter from './01_render函数的使用/03_RenderCounter'
import RenderSetupCounter from './01_render函数的使用/04_RenderSetupCounter'
import RenderSlot from './01_render函数的使用/05_RenderSlot'
import RenderJSX from './02_JSX语法的使用/01_RenderJSX'

export default {
  name: 'App',
  components: {
    RenderExample,
    RenderExample_Setup,
    RenderCounter,
    RenderSetupCounter,
    RenderSlot,
    RenderJSX,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

h2,
h3 {
  text-decoration: underline;
  color: orange;
}

.border {
  border: 1px solid gray;
}
</style>
