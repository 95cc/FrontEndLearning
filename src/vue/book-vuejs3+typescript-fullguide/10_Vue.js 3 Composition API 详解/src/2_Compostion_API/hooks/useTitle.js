import { ref, watch } from 'vue'

export default function (title = '默认标题') {
  const titleRef = ref(title)
  watch(
    titleRef,
    (newVal) => {
      document.title = newVal
    },
    {
      immediate: true,
    }
  )

  return titleRef
}
