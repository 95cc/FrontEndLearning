<script>
export default {
  name: 'home', // 组件的名称
  props: {
    name: {
      type: String,
      default: '',
    },
    age: {
      type: Number,
      default: 0,
    },
  },
  emits: ['pageClick'],
  methods: {
    divClick() {
      this.$emit('pageClick', 'home组件触发的单击')
    },
  },
}
</script>

<template>
  <div @click="divClick">Home组件: {{ name }} - {{ age }}</div>
</template>
