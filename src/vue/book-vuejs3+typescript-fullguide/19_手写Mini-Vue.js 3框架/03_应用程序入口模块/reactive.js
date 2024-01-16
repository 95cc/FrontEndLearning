class Dep {
  constructor() {
    // 存放收集的依赖，即副作用函数
    this.subscribers = new Set()
  }
  // 自动收集依赖
  depend() {
    if (activeEffect) {
      this.subscribers.add(activeEffect)
    }
  }

  // 发布通知
  notify() {
    // 遍历所有的依赖，阿炳执行
    this.subscribers.forEach((effect) => {
      effect()
    })
  }
}

// const dep = new Dep() // 已被getDep函数代替

let activeEffect = null
function watchEffect(effect) {
  activeEffect = effect // 将需收集的依赖赋给全局activeEffect变量
  // dep.depend() // 自动收集依赖（已经移到get函数中实现）
  effect() // 收集完依赖后执行该依赖函数
  activeEffect = null
}

// Map({key: value}): key是一个字符串
// WeakMap({key(对象): value}): key是一个对象，弱引用
// 1. 创建一个WeakMap对象，用于存放所有的依赖
const targetMap = new WeakMap()
// 2. 获取某一个属性对应的依赖Set集合
function getDep(target, key) {
  // 2.1 根据对象(target)取出对应的Map对象
  let depsMap = targetMap.get(target)
  if (!depsMap) {
    depsMap = new Map()
    targetMap.set(target, depsMap)
  }

  // 2.2 取出具体的dep对象
  let dep = depsMap.get(key)
  if (!dep) {
    dep = new Dep()
    depsMap.set(key, dep)
  }

  return dep
}

// 3. Vue.js 3 对原生(raw)数据进行劫持
function reactive(raw) {
  return new Proxy(raw, {
    get(target, key) {
      // 这里 target === raw
      const dep = getDep(target, key)
      dep.depend()
      return target[key]
    },
    set(target, key, newValue) {
      const dep = getDep(target, key)
      target[key] = newValue
      dep.notify()
    },
  })
}
