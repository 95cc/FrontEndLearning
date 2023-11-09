<script>
export default {
  props: {
    modelValue: String,
  },
  emits: ['update:modelValue'],
  methods: {},
  computed: {
    value: {
      set(newVal) {
        this.$emit('update:modelValue', newVal)
      },
      get() {
        return this.modelValue
      },
    },
  },
}
</script>

<template>
  <div class="hy-input">
    HyInput组件
    <!-- <input :value="modelValue" @input="inputClick" /> -->

    <!-- ⚠️⚠️⚠️ -->
    <!-- VueCompilerError: v-model cannot be used on a prop, because local prop bindings are not writable. -->
    <!-- Use a v-bind binding combined with a v-on listener that emits update:x event instead. -->
    <!-- <input v-model="invalidModelValue" /> -->
    <!-- <input v-bind:value="validModelValue" @input="input2Click" /> -->

    <input v-model="value" />
  </div>
</template>
