<script setup>
import { ref, useSlots, useAttrs } from 'vue'

// 1. 基本使用
const counter = ref(100)
const increment = () => counter.value++

// 2. defineProps和defineEmits
const props = defineProps({
  message: {
    type: String,
    default: '默认message',
  },
})
const emit = defineEmits(['increment'])
const emitEvent = () => {
  console.log('子组件拿到父组件传递进来的message:', props.message)
  emit('increment', 1)
}

// 3. defineExpose
const age = 18
const name = ref('coder')
const showMessage = () => {
  console.log('showMessage方法')
}
defineExpose({
  age,
  name,
  showMessage,
})

// 4. useSlots 和 useAttrs
// 4.1 获取该组件的插槽，相当于setup函数中的context.slots
const slots = useSlots()
console.log('21_ScriptSetupExample slots: ', slots)
// 4.2 获取该组件所有的属性，相当于setup函数中的context.attrs
const attrs = useAttrs()
console.log('21_ScriptSetupExample attrs: ', attrs)
</script>

<template>
  <div style="border: 1px solid gray">
    1. 基本使用
    <h4>当前计数: {{ counter }}</h4>
    <button @click="increment">+1</button>
  </div>
  <div style="border: 1px solid gray">
    2. defineProps和defineEmits
    <p>message: {{ message }}</p>
    <button @click="emitEvent">发射emit事件</button>
  </div>
  <div style="border: 1px solid gray">3. defineExpose</div>
  <div style="border: 1px solid gray">
    4. useSlots 和 useAttrs
    <p>
      在 script
      setup中使用slots和attrs是很罕见的，因为在模板中可以直接使用$slots和$attrs
    </p>
  </div>
</template>
