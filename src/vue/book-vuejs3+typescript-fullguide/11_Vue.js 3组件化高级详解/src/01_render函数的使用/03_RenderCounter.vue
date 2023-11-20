<script>
import { h } from 'vue'

export default {
  data() {
    return {
      counter: 0,
    }
  },
  render() {
    return h('div', { class: 'render-counter' }, [
      h('h4', null, `当前计数: ${this.counter}`),
      h(
        // 1. 标签名
        'button',
        // 2. 标签属性
        {
          onClick: () => this.counter++,
        },
        // 3. 标签内容
        '+1'
      ),
      h(
        'button',
        {
          onClick: () => this.counter--,
        },
        '-1'
      ),
    ])
  },
}
</script>
