<script>
export default {
  inheritAttrs: false,
}
</script>

<template>
  <div class="no-prop-attribute">
    改组件没有定义任何的props属性
    <h4 :class="$attrs.class">{{ $attrs.id }} - {{ $attrs.name }}</h4>
  </div>
</template>
