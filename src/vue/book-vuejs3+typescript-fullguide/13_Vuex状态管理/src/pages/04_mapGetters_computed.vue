<template>
  <div>
    <h4>书籍总价: {{ $store.getters.totalPrice }}</h4>
    <h4>Vue.js书籍总价: {{ $store.getters.totalPriceByName('Vue.js') }}</h4>
    <h4>React书籍总价: {{ $store.getters.totalPriceByName('React') }}</h4>
    <h4>webpack书籍总价: {{ $store.getters.totalPriceByName('webpack') }}</h4>

    <h4>mapGetters 书籍总价: {{ totalPrice }}</h4>
    <h4>mapGetters 书籍折扣: {{ discount }}</h4>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    // mapGetters函数接收数组的语法
    ...mapGetters(['totalPrice']),
    // mapGetters函数接收对象语法
    ...mapGetters({
      discount: 'currentDiscount',
    }),
  },
}
</script>
