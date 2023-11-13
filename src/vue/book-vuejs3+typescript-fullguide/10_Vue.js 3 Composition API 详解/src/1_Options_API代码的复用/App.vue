<template>
  <div>
    <h1>Options API 代码的复用</h1>
    <h2>1. Mixin混入</h2>
    <div>{{ message }}</div>
    <button @click="foo">单击调用demoMixin定义的foo方法</button>

    <h2>2. Mixin的合并规则</h2>
    <ol>
      <li>处理data函数返回值对象。(如果冲突,保留组件对象自身的数据)</li>
      <li>处理生命周期钩子函数 (都会被调用)</li>
      <li>
        处理值为对象的选项。(合并且都生效。如果对象的key相同，那么会取组件对象的减值对。)
      </li>
    </ol>

    <h2>3. 全局混入Mixin</h2>
    <div>
      {{
        `const app = createApp(App) 
app.mixin({
  created() {
    console.log('global mixin created')
  },
})

app.mount('#app')`
      }}
    </div>

    <h2>4. extends继承</h2>
    <Home />
  </div>
</template>

<script>
import { demoMixin } from './mixins/demoMixins'
import Home from './Home'

export default {
  name: 'App',
  components: {
    Home,
  },
  mixins: [demoMixin],
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
