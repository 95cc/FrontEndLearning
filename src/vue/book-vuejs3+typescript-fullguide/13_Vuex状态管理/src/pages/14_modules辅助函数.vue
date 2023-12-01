<template>
  <div class="border">
    <h4>home 子模块 homeCounter的状态: {{ homeCounter }}</h4>
    <h4>home 子模块 doubleHomeCounter: {{ doubleHomeCounter }}</h4>
    <button @click="homeIncrementCommit">+1</button>
    <button @click="incrementAction">+1</button>
  </div>
</template>

<script>
// 方式1: 映射时指定模块名前缀
// import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
// export default {
//   computed: {
//     ...mapState({
//       homeCounter: (state) => state.home.homeCounter,
//     }),
//     ...mapGetters({
//       doubleHomeCounter: 'home/doubleHomeCounter',
//     }),
//   },
//   methods: {
//     ...mapMutations({
//       homeIncrementCommit: 'home/increment',
//     }),
//     ...mapActions({
//       incrementAction: 'home/incrementAction',
//     }),
//   },
// }

// 方式2: 辅助函数第一个参数作为模块名前缀
// import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
// export default {
//   computed: {
//     ...mapState('home', ['homeCounter']),
//     ...mapGetters('home', ['doubleHomeCounter']),
//   },
//   methods: {
//     ...mapMutations('home', {
//       homeIncrementCommit: 'increment',
//     }),
//     ...mapActions('home', ['incrementAction']),
//   },
// }

// 方式3 借助辅助函数统一添加模块名前缀 (推荐)
// import { createNamespacedHelpers } from 'vuex'
// const { mapState, mapGetters, mapMutations, mapActions } =
//   createNamespacedHelpers('home')
// export default {
//   computed: {
//     ...mapState(['homeCounter']),
//     ...mapGetters(['doubleHomeCounter']),
//   },
//   methods: {
//     ...mapMutations({
//       homeIncrementCommit: 'increment',
//     }),
//     ...mapActions(['incrementAction']),
//   },
// }

// 方式4 在setup中统一添加模块名前缀 (推荐)
import { createNamespacedHelpers } from 'vuex'
import { useMapper } from '../hooks/index'

const { mapState, mapGetters, mapMutations, mapActions } =
  createNamespacedHelpers('home')

export default {
  setup() {
    const stateFuncs = useMapper(mapState, ['homeCounter'])
    const gettersFuncs = useMapper(mapGetters, ['doubleHomeCounter'])
    const mutationFuncs = mapMutations({
      homeIncrementCommit: 'increment',
    })
    const actionsFuncs = mapActions(['incrementAction'])

    return {
      ...stateFuncs,
      ...gettersFuncs,
      ...mutationFuncs,
      ...actionsFuncs,
    }
  },
}
</script>
