<template>
  <div class="border">
    <h4>当前计数: {{ $store.state.counter }}</h4>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <button @click="addTen">Add 10</button>
  </div>
</template>

<script>
import { useStore } from 'vuex'

export default {
  methods: {
    increment() {
      // 分发action
      this.$store.dispatch('incrementAction')
    },
  },
  setup() {
    const store = useStore()

    const decrement = () => {
      store.dispatch('decrementAction')
    }
    const addTen = () => {
      // store.dispatch('incrementNAction', {num: 10})
      store.dispatch({
        type: 'incrementNAction',
        num: 10,
      })
    }

    return {
      decrement,
      addTen,
    }
  },
}
</script>
