<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },
  // props, 父组件传递过来的属性
  setup(props, context) {
    console.log('props: ', props)
    console.log('props.message: ', props.message)
    // attrs: 所有非prop的属性
    console.log('context.attrs: ', context.attrs)
    console.log(
      'context.attrs.id: ',
      context.attrs.id,
      'context.attrs.class: ',
      context.attrs.class
    )
    // 父组件传递过来的插槽
    console.log('context.slots: ', context.slots)
    // 用于触发事件，如context.emit('name', value)
    console.log('context.emit:', context.emit)
  },
}
</script>

<template>
  <div class="setup-props">
    <h4>{{ message }}</h4>
  </div>
</template>
