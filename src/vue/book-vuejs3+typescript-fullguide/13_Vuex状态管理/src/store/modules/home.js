const homeModule = {
  namespaced: true,
  state() {
    return {
      homeCounter: 1000,
    }
  },
  getters: {
    doubleHomeCounter(state) {
      return state.homeCounter * 2
    },
    homeCountAddRootCount(state, getters, rootState) {
      return state.homeCounter + rootState.counter
    },
  },
  mutations: {
    increment(state) {
      state.homeCounter++
    },
  },
  actions: {
    // 在action函数中，局部状态通过context.state暴露出来，根节点状态通过context.rootState暴露出来
    incrementAction(context) {
      // home模块:state, commit, dispatch, getters  根模块: rootState, rootGetters
      const { state, commit, dispatch, getters, rootState, rootGetters } =
        context

      // 提交到当前模块的mutation中
      commit('increment')
      // 提交到根模块的mutation中
      commit('increment', null, { root: true })
      // 分发到根模块的action
      dispatch('incrementAction', null, { root: true })
    },
  },
}

export default homeModule
