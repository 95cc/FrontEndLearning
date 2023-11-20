<script>
import { ref, h } from 'vue'

export default {
  setup() {
    const counter = ref(0)

    return () => {
      return h('div', { class: 'render-counter' }, [
        h('h4', null, `当前计数: ${counter.value}`),
        h(
          // 1. 标签名
          'button',
          // 2. 标签属性
          {
            onClick: () => counter.value++,
          },
          // 3. 标签内容
          '+1'
        ),
        h(
          'button',
          {
            onClick: () => counter.value--,
          },
          '-1'
        ),
      ])
    }
  },
}
</script>
