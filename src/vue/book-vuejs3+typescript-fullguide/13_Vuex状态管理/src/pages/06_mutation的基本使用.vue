<template>
  <div>
    <h4>当前计数: {{ $store.state.counter }}</h4>
    <button @click="$store.commit('increment')">+1</button>
    <button @click="$store.commit('decrement')">-1</button>

    <button @click="add10">+10</button>
  </div>
</template>

<script>
import { INCREMENT_N } from '../store/mutationTypes'

export default {
  methods: {
    add10() {
      // 方式1
      // this.$store.commit('incrementN', { num: 10, name: 'coder' })

      // 方式2
      this.$store.commit({
        // 指定触发类型为 incrementN 的 mutation 函数
        type: INCREMENT_N,
        // 将下面的属性都传递给payload参数
        num: 10,
        name: 'coder',
      })
    },
  },
}
</script>
