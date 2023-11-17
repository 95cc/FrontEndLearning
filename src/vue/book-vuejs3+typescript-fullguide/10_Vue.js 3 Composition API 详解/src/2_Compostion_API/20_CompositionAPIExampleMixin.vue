<script>
import { ref } from 'vue'
// ---
import useCounter from './hooks/useCounter'
import useTitle from './hooks/useTitle'
import useScrollPosition from './hooks/useScrollPosition'

export default {
  setup() {
    // 案例2 修改网页的标题
    const titleRef = useTitle('coder')
    setTimeout(() => {
      titleRef.value = 'why'
    }, 3000)

    // 案例3 监听页面滚动位置
    // const scrollX = ref(0)
    // const scrollY = ref(0)
    // document.addEventListener('scroll', () => {
    //   scrollX.value = window.scrollX
    //   scrollY.value = window.scrollY
    // })

    return {
      // 案例1 计算器
      ...useCounter(),
      // 案例2 修改网页的标题
      titleRef,
      // 案例3 监听页面滚动位置
      ...useScrollPosition(),
    }
  },
}
</script>

<template>
  <div style="border: 1px solid gray">
    <h4>1. 计算器案例</h4>
    <div>当前计数：{{ counter }}</div>
    <div>当前计数*2：{{ doubleCounter }}</div>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
  <div style="border: 1px solid gray">
    <h4>2. 修改网页标题</h4>
    <button @click="titleRef = 'Textabc'">修改网页标题为：Textabc</button>
  </div>
  <div style="border: 1px solid gray">
    <h4>3. 显示页面滚动位置</h4>
    <p style="width: 3000px; height: 5000px">
      width: 3000px; height: 5000px，模拟页面滚动
    </p>
    <div style="position: fixed; top: 20px; right: 20px">
      <div>scrollX: {{ scrollX }}</div>
      <div>scrollY: {{ scrollY }}</div>
    </div>
  </div>
</template>
