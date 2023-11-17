<script>
export default {
  data() {
    return {
      counter: 100,
    }
  },
  computed: {
    doubleCounter: {
      get() {
        return this.counter * 2
      },
    },
  },
  methods: {
    increment() {
      this.counter++
    },
    decrement() {
      this.counter--
    },
  },
}
</script>

<template>
  <div style="border: 1px solid gray">
    <div>当前计数：{{ counter }}</div>
    <div>当前计数*2：{{ doubleCounter }}</div>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
</template>
