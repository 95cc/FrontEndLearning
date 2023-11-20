<script>
import { h } from 'vue'
import HelloWorld from './other/HelloWord.vue'

export default {
  render() {
    return h('div', { class: 'render-slot' }, [
      'RenderSlot组件',
      // 渲染HelloWorld组件
      h(HelloWorld, null, {
        // 使用HelloWorld组件的默认插槽
        default: (props) =>
          h(
            'span',
            null,
            `传入HelloWorld插槽中的内容。插槽props的name: ${props.name}`
          ),
      }),
    ])
  },
}
</script>

<style scoped>
.render-slot {
  border: 1px solid #ddd;
  margin: 8px;
}
</style>
