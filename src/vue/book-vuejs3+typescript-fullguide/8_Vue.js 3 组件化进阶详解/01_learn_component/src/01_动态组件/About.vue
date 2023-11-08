<script>
export default {
  name: 'about', // 组件的名称
  data() {
    return {
      counter: 0,
    }
  },
  created() {
    console.log('about created')
  },
  unmounted() {
    console.log('about unmounted')
  },
  // 下面是<keep-alive></keep-alive>缓存组件实例的两个声明周期
  activated() {
    console.log('about activated')
  },
  deactivated() {
    console.log('about deactivated')
  },
}
</script>

<template>
  <div>
    About组件
    <button @click="counter++">单击递增：{{ counter }}</button>
  </div>
</template>
