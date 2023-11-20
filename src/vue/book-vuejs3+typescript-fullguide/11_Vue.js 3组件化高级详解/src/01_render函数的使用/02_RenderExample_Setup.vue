<script>
// 导入h函数 (createVNode函数简化为h函数)
import { h, createVNode } from 'vue'

export default {
  setup() {
    return () => h('h4', { class: 'title' }, 'setup中返回 RenderExample组件 ')
  },
}
</script>

<style scoped>
.title {
  text-decoration: underline;
}
</style>
