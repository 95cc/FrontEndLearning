import { ref } from 'vue'

export default function useScrollPosition() {
  // 案例3 监听页面滚动位置
  const scrollX = ref(0)
  const scrollY = ref(0)
  document.addEventListener('scroll', () => {
    scrollX.value = window.scrollX
    scrollY.value = window.scrollY
  })
  return { scrollX, scrollY }
}
