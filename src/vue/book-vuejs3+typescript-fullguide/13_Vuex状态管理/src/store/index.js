import { createStore } from 'vuex'

const store = createStore({
  // 1. 定义全局共享的状态
  state() {
    return {
      counter: 1,
      name: 'coder',
      age: 18,
    }
  },
  // 2. 在 mutations 中修改全局状态
  mutations: {
    // 定义increment函数，参数state是state()函数返回的对象
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
  },
})

export default store
