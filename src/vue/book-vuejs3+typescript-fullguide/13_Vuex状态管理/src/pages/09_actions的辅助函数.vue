<template>
  <div class="border">
    <h4>当前计数: {{ $store.state.counter }}</h4>
    <!-- 单击"+1"按钮会回调下面映射好的 incrementAction 函数 -->
    <button @click="incrementAction">+1</button>
    <button @click="decrement">-1</button>
    <button @click="addTen({ num: 20 })">Add 20</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    // 将 this.incrementAction() 映射为 this.$store.dispatch('incrementAction')
    ...mapActions(['incrementAction']),
  },
  setup() {
    // 将this.decrement()映射为this.$store.dispatch('decrementAction')
    const actionsFuncs = mapActions({
      decrement: 'decrementAction',
      addTen: 'incrementNAction',
    })

    return {
      ...actionsFuncs,
    }
  },
}
</script>
