<script>
export default {
  props: {
    modelValue: String,
    title: String,
  },
  emits: ['update:modelValue', 'update:title'],
  methods: {
    inputClick(event) {
      this.$emit('update:modelValue', event.target.value)
    },
    input2Click(event) {
      this.$emit('update:title', event.target.value)
    },
  },
}
</script>

<template>
  <div class="hy-input">
    HyInput组件
    <input :value="modelValue" @input="inputClick" />

    <!-- ⚠️⚠️⚠️ -->
    <!-- VueCompilerError: v-model cannot be used on a prop, because local prop bindings are not writable. -->
    <!-- Use a v-bind binding combined with a v-on listener that emits update:x event instead. -->
    <!-- <input v-model="invalidModelValue" /> -->
    <input :value="title" @input="input2Click" />
  </div>
</template>
