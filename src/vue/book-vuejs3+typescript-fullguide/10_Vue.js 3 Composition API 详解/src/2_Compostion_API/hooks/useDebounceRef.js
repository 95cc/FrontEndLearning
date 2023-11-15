import { customRef } from 'vue'

// 1. 自定义ref
export default function (value, delay = 300) {
  let timer = null
  // 2. 工厂函数接收track和trigger函数
  return customRef((track, trigger) => {
    return {
      get() {
        // 3. 获取时收集依赖
        track()
        return value
      },
      set(newVal) {
        // 4. 防抖的实现
        clearTimeout(timer)
        timer = setTimeout(() => {
          // 5. 更新值
          value = newVal
          // 6. 赋值时，触发更新
          trigger()
        }, delay)
      },
    }
  })
}
