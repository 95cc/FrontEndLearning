<script>
export default {
  props: {
    modelValue: Object,
  },
  emits: ['update:modelValue'],
  methods: {
    inputChange(event, field) {
      this.$emit('update:modelValue', {
        ...this.modelValue,
        [field]: event.target.value, // 将当前获取的值赋给对应的name和title属性
      })
    },
  },
}
</script>

<template>
  <div class="multiple-form">
    HYMultipleInput组件
    <input :value="modelValue.name" @input="inputChange($event, 'name')" />
    <input :value="modelValue.title" @input="inputChange($event, 'title')" />
    <!-- 不建议使用下面的简写。
      1. 会直接修改props属性。
      2. 可读性也不是很好
     -->
    <!-- <input v-model="modelValue.title" /> -->
  </div>
</template>
