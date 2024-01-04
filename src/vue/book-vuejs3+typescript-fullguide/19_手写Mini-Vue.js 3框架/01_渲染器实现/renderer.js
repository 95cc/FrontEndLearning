const h = (tag, props, children) => {
  // 返回VNode对象，即返回javascript对象
  return {
    tag,
    props,
    children,
  }
}

const mount = (vnode, container) => {
  // 1. 创建真实的原生DOM对象，并且在 vnode 对象上保存 el 对象
  const el = (vnode.el = document.createElement(vnode.tag))

  // 2. 处理props
  if (vnode.props) {
    for (const key in vnode.props) {
      const value = vnode.props[key]

      if (key.startsWith('on')) {
        el.addEventListener(key.slice(2).toLowerCase(), value)
      } else {
        el.setAttribute(key, value)
      }
    }
  }

  // 3. 处理children
  if (vnode.children) {
    if (typeof vnode.children === 'string') {
      el.textContent = vnode.children
    } else {
      vnode.children.forEach((item) => {
        mount(item, el)
      })
    }
  }

  container.appendChild(el)
}

// patch函数用于对两个VNode进行对比。n1是旧节点，n2是新节点
const patch = (n1, n2) => {
  // 如果n1和n2的类型不一样，则用n2直接替换n1
  if (n1.tag !== n2.tag) {
    const n1ElParent = n1.el.parentElement
    n1ElParent.removeChild(n1.el)
    mount(n2, n1ElParent)
    return
  }

  // 如果n1和n2的类型不一样，先处理props，再处理children
  // 1. 取出el对象，并且在n2中进行保存
  const el = (n2.el = n1.el)

  // 2. 处理props
  const oldProps = n1.props || {}
  const newProps = n2.props || {}
  // 2.1 获取所有的newProps，添加到el上
  for (const key in newProps) {
    const oldValue = oldProps[key]
    const newValue = newProps[key]
    if (newValue !== oldValue) {
      // 对事件监听的判断
      if (key.startsWith('on')) {
        el.addEventListener(key.slice(2).toLowerCase(), newValue)
      } else {
        el.setAttribute(key, newValue)
      }
    }
  }
  // 2.2 删除旧的props
  for (const key in oldProps) {
    // 对事件监听的判断
    if (key.startsWith('on')) {
      const value = oldProps[key]
      el.removeEventListener(key.slice(2).toLowerCase(), value)
    }
    if (!key in newProps) {
      el.removeAttribute(key)
    }
  }

  // 3. 处理children的情况
  const oldChildren = n1.children || []
  const newChildren = n2.children || []

  if (typeof newChildren === 'string') {
    // 情况一：newChildren本身是一个string
    // 边界情况（edge case）
    if (typeof oldChildren === 'string') {
      if (newChildren !== oldChildren) {
        el.textContent = newChildren
      }
    } else {
      el.innerHTML = newChildren
    }
  } else {
    // 情况二：newChildren新节点是一个数组
    if (typeof oldChildren === 'string') {
      // 旧节点是字符串类型
      el.innerHTML = ''
      // 遍历新节点，将每个新节点挂载到el上
      newChildren.forEach((item) => {
        mount(item, el)
      })
    } else {
      // 如 oldChildren 为 [v1, v2, v3, v8, v9]
      // 如 newChildren 为 [v1, v5, v6]
      // 3.1 取出n1、n2中children数组的最小长度
      const commonLength = Math.min(oldChildren.length, newChildren.length)
      // 前面相同索引的VNode，进行patch操作。patch(v1, v2)、patch(v2, v5)、patch(v3, v6)
      for (let i = 0; i < commonLength; i++) {
        patch(oldChildren[i], newChildren[i])
      }

      // 如 oldChildren 为 [v1, v2, v3]
      // 如 newChildren 为 [v1, v5, v6, v8, v9]
      // 3.2 newChildren.length > oldChildren.length
      if (newChildren.length > oldChildren.length) {
        // 新节点children多出的v8、v9，直接挂载到el上
        newChildren.slice(oldChildren.length).forEach((item) => {
          mount(item, el)
        })
      }

      // 如 oldChildren 为 [v1, v5, v6, v8, v9]
      // 如 newChildren 为 [v1, v2, v3]
      // 3.3 oldChildren.length > newChildren.length
      if (oldChildren.length > newChildren.length) {
        // 旧节点children多出的v8、v9，从el中移除
        oldChildren.slice(newChildren.length).forEach((item) => {
          el.removeChild(item.el)
        })
      }
    }
  }
}
