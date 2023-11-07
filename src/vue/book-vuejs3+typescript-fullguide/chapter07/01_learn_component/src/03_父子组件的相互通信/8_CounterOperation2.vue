<script>
export default {
  // 1. 数组写法
  // emits: ['add', 'sub', 'addN'],

  // 2. 对象写法，目的是进行参数的验证
  emits: {
    add: null, // 定义该组件可以向其父组件触发的add事件
    sub: null,
    addN: (num, nage, age) => {
      if (num > 10) {
        return true
      }
      // 如果num小于等于10，则返回false。控制台会出现参数验证不通过的警告，但不影响程序的进行。
      return false
    },
  },
  data() {
    return {
      num: 0,
    }
  },
  methods: {
    increment() {
      this.$emit('add')
    },
    decrement() {
      this.$emit('sub')
    },
    incrementN() {
      this.$emit('addN', this.num, 'why', '18')
    },
  },
}
</script>

<template>
  <div>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <input type="text" v-model.number="num" />
    <button @click="incrementN">+n</button>
  </div>
</template>
