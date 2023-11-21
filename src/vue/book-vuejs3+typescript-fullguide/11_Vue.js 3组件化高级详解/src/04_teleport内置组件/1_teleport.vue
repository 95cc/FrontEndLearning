<template>
  <div>
    <div class="border">
      <p>3.1 teleport的基本使用</p>
      <teleport to="body">
        <h4>h4挂载到body上，而不是id=app的div上</h4>
      </teleport>
    </div>
    <div class="border">
      <p>3.2 teleport中嵌套组件</p>
      <teleport to="body">
        <h4>h4挂载到body上，而不是id=app的div上</h4>
        <HeloWordJSX />
      </teleport>
    </div>
    <div class="border">
      <p>3.3 多个teleport组件的使用</p>
      <teleport to="body">
        <h4>h4挂载到body上，而不是id=app的div上</h4>
      </teleport>
      <teleport to="body">
        <HeloWordJSX />
      </teleport>
    </div>
  </div>
</template>

<script>
import HeloWordJSX from './HeloWordJSX.vue'

export default {
  components: {
    HeloWordJSX,
  },
}
</script>
