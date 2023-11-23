<template>
  <div>
    <h4>书籍总价: {{ $store.getters.totalPrice }}</h4>
    <h4>Vue.js书籍总价: {{ $store.getters.totalPriceByName('Vue.js') }}</h4>

    <h4>mapGetters Vue.js书籍总价: {{ totalPriceByName('Vue.js') }}</h4>
  </div>
</template>

<script>
import { useGetters } from '../hooks/index'

export default {
  setup() {
    const stateGetters = useGetters(['totalPriceByName'])
    return {
      ...stateGetters,
    }
  },
}
</script>
