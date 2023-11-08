<script>
export default {
  props: {
    names: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<template>
  <div class="show-names">
    <template v-for="(item, index) in names" :key="item">
      <!-- 为插槽添加item和index属性，并绑定item和index数据。item和index称为slot prop -->
      <slot :item="item" :index="index"></slot>
    </template>
  </div>
</template>
