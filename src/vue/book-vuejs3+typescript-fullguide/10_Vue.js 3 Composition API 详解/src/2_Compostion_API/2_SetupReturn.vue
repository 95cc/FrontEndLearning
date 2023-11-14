<script>
export default {
  props: {},
  // props, 父组件传递过来的属性
  setup(props, context) {
    let counter = 100
    const increment = () => {
      counter++
      console.log(counter)
    }
    return {
      counter,
      increment,
    }
  },
}
</script>

<template>
  <div class="setup-props">
    SetupReturn组件
    <h4>当前计数：{{ counter }}</h4>
    <button @click="increment">+1</button>
  </div>
</template>
