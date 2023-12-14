import { createStore } from 'vuex'
import type { Store } from 'vuex'

export interface IRootState {
  counter: number
}

// const store: Store<IRootState> = createStore({})
// 和上面的等价
const store = createStore<IRootState>({
  state() {
    return {
      counter: 10,
    }
  },
  mutations: {
    increment(state: IRootState) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
  },
})

export default store
