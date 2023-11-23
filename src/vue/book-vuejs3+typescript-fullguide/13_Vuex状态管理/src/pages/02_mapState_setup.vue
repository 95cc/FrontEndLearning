<template>
  <div style="border: 1px solid #ddd">
    <h4>Home: {{ $store.state.counter }}</h4>
    <h4>Home: {{ counter }}</h4>
    <h4>Name: {{ name }}</h4>
    <h4>Age: {{ age }}</h4>
  </div>
</template>

<script>
import { useStore, mapState } from 'vuex'
import { computed } from 'vue'

export default {
  setup() {
    const store = useStore()

    // 实现一:
    // const counter = computed(() => store.state.counter)
    // const name = computed(() => store.state.name)
    // const age = computed(() => store.state.age)

    // return {
    //   counter,
    //   name,
    //   hyAge,
    // }

    // 实现二:
    const storeStateFns = mapState(['counter', 'name', 'age'])
    console.log(storeStateFns)

    const storeState = {}
    Object.keys(storeStateFns).forEach((fnKey) => {
      // 绑定this为 {$store: store}
      const fn = storeStateFns[fnKey].bind({ $store: store })
      // 将普通函数转换为计算属性函数
      storeState[fnKey] = computed(fn)
    })
    return {
      ...storeState,
    }
  },
}
</script>
