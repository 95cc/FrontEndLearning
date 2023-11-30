const userModule = {
  // user模块的state (局部状态)
  state() {
    return {
      // 在user模块中定义一个 userCounter 全局变量
      userCounter: 1000,
    }
  },
  getters: {
    doubleUserCounter(state) {
      return state.userCounter * 2
    },
    // user模块的getter函数，根节点状态 (rootState) 作为第三个参数暴露出来
    userCountAddRootCount(state, getters, rootState) {
      return state.userCounter + rootState.counter
    },
  },
  mutations: {
    // state是user模块的局部状态
    increment(state) {
      state.userCounter++
    },
  },
  actions: {
    // 在action函数中，局部状态通过context.state暴露出来，根节点状态通过context.rootState暴露出来
    incrementAction(context) {
      const { state, commit, rootState } = context
      commit('increment')
    },
  },
}

export default userModule
