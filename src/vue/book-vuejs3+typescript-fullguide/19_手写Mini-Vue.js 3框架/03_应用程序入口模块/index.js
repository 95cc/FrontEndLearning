function createApp(rootComponent) {
  return {
    mount(selector) {
      const container = document.querySelector(selector)
      let isMounted = false
      let oldVNode = null

      watchEffect(function () {
        if (!isMounted) {
          // 第一次挂载。例如，初始化计数器
          oldVNode = rootComponent.render() // 获取VNode，render函数对data的响应式数据有依赖
          mount(oldVNode, container)
          isMounted = true
        } else {
          // 页面发生更新。例如，计数器加1操作
          const newVNode = rootComponent.render()
          patch(oldVNode, newVNode)
          oldVNode = newVNode
        }
      })
    },
  }
}
