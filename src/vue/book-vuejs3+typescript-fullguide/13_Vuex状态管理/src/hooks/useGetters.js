import { useStore, mapGetters } from 'vuex'
import { computed } from 'vue'

export function useGetters(mapper) {
  const store = useStore()
  // mapGetters辅助函数
  const stateFns = mapGetters(mapper)
  const state = []
  Object.keys(stateFns).forEach((fnKey) => {
    // 将普通函数转成计算属性函数，并绑定一个包含$store属性的对象
    state[fnKey] = computed(stateFns[fnKey].bind({ $store: store }))
  })

  return state
}
