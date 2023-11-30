<template>
  <div class="border">
    <h4>root state 根模块的状态: {{ $store.state.counter }}</h4>
    <h4>
      root state 根模块currentDiscount: {{ $store.getters.currentDiscount }}
    </h4>
    <!-- 1. 访问子模块的state 和 getters -->
    <h4>
      home state 子模块 userCounter 的状态: {{ $store.state.home.homeCounter }}
    </h4>
    <h4>
      home state 子模块 doubleHomeCounter 的状态:
      {{ $store.getters['home/doubleHomeCounter'] }}
    </h4>
    <h4>
      home state 子模块 homeCountAddRootCount 的状态:
      {{ $store.getters['home/homeCountAddRootCount'] }}
    </h4>
    <button @click="incrementAction">+1</button>
  </div>
</template>

<script>
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    const incrementAction = () => {
      // 触发root模块的incrementAction函数和user子模块的incrementAction函数
      store.dispatch('home/incrementAction')
    }
    return {
      incrementAction,
    }
  },
}
</script>
