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

const dep = new Dep()

let activeEffect = null
function watchEffect(effect) {
  activeEffect = effect // 将需收集的依赖赋给全局activeEffect变量
  dep.depend() // 自动收集依赖
  effect() // 收集完依赖后执行该依赖函数
  activeEffect = null
}

const info = { counter: 100, name: 'coderss' }
console.log('--- 自动收集依赖 ---')
watchEffect(function () {
  console.log(info.counter * 2)
})
watchEffect(function () {
  console.log(info.counter * info.counter)
})
watchEffect(function () {
  console.log(info.name)
})
console.log('--- 更新 ---')

info.counter++
dep.notify()
