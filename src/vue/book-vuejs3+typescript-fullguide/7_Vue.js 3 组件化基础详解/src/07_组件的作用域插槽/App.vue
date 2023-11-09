<script>
import ShowNames from './1_ShowNames.vue'

export default {
  name: 'App', // 添加name的好处：允许组件模板递归调用自身，以及方便调试组件。
  components: {
    ShowNames,
  },
  data() {
    return {
      names: ['why', 'kobe', 'james', 'rose'],
    }
  },
}
</script>

<template>
  <div>
    <h2>组件的作用域插槽</h2>

    <h3>1. 作用域插槽</h3>
    <ShowNames :names="names">
      <!-- v-slot:default后面的值slotProps是插槽属性的集合。其中, slotProps可任意命名 -->
      <template v-slot:default="slotProps">
        <div>
          <span>{{ slotProps.item }} - {{ slotProps.index }}</span>
        </div>
      </template>
    </ShowNames>

    <h3>2. 独占默认插槽 (v-slot:default="xx" 简写为 v-slot='xx')</h3>
    <ShowNames :names="names">
      <!-- v-slot:default后面的值slotProps是插槽属性的集合。其中, slotProps可任意命名 -->
      <template v-slot="slotProps">
        <div>
          <span>{{ slotProps.item }} - {{ slotProps.index }}</span>
        </div>
      </template>
    </ShowNames>

    <h3>3. 只有默认插槽时，组件的标签可以被当作插槽的模板(template)使用</h3>
    <ShowNames :names="names" v-slot="slotProps">
      <!-- v-slot:default后面的值slotProps是插槽属性的集合。其中, slotProps可任意命名 -->
      <div>
        <span>{{ slotProps.item }} - {{ slotProps.index }}</span>
      </div>
    </ShowNames>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
