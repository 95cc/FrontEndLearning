<script>
export default {}
</script>

<!-- 如果没有显示绑定非Props属性，会报警告 -->
<!-- Extraneous non-props attributes (class) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.  -->
<template>
  <div class="no-prop-attribute">改组件没有定义任何的props属性 (节点1)</div>
  <div class="no-prop-attribute">改组件没有定义任何的props属性 (节点2)</div>
  <div class="no-prop-attribute" :class="$attrs.class">
    改组件没有定义任何的props属性 (节点3)
  </div>
</template>
