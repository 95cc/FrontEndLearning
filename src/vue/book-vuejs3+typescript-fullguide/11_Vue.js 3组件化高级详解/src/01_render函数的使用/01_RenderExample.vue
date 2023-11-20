<script>
// 导入h函数 (createVNode函数简化为h函数)
import { h, createVNode } from 'vue'

export default {
  // 在render函数中使用h函数
  render() {
    // 等价于 <h4 class="title">RenderExample组件</h4>
    return h('h4', { class: 'title' }, 'RenderExample组件')
    // return createVNode('h4', { class: 'title' }, 'RenderExample组件')
  },
}
</script>

<style scoped>
.title {
  text-decoration: underline;
}
</style>
