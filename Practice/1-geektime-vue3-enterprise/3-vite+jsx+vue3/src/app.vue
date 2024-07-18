<script setup>
import { reactive, ref } from 'vue'
// ---
import JSXCounter from './JSXCounter/counter'
import TemplateReverse from './template-syntax/template-reverse.vue'
import JSXReverse from './jsx-syntax/jsx-reverse'
import TemplateDialog from './template-syntax/template-dialog.vue'
import { createDialog } from './jsx-syntax/jsx-dialog.jsx'
import './jsx-syntax/jsx-dialog.css'

const state = reactive({
  count: 0,
})
const onClick = () => {
  state.count++
}

// 对话框相关
const showDialog = ref(false)
const showCount = ref(0)
const showText = ref('温馨提示，这是一个对话框')
const onClickOpenDialog = () => {
  showDialog.value = true
  showCount.value += 1
  showText.value = `温馨提示，这是第${showCount.value}次打开对话框`
}
const onDialogOk = () => {
  showDialog.value = false
}

const onClickOpenJSXDialog = () => {
  showCount.value += 1

  const dialog = createDialog({
    text: `温馨提示，这是第${showCount.value}次打开对话框`,
    onOk: () => {
      dialog.close()
    },
  })
}
</script>

<template>
  <div class="demo">
    <div class="text">{{ state.count }}</div>
    <button class="btn" @click="onClick">Add</button>
  </div>

  <div class="demo">
    <JSXCounter />
  </div>
  <div style="display: flex">
    <TemplateReverse />
    <JSXReverse />
  </div>

  <div class="demo">
    <button @click="onClickOpenDialog">打开Template语法对话框</button>
  </div>
  <div class="demo">
    <button @click="onClickOpenJSXDialog">打开JSX语法对话框</button>
  </div>
  <TemplateDialog :show="showDialog" :text="showText" @onOk="onDialogOk" />
</template>

<style>
.demo {
  width: 200px;
  padding: 10px;
  box-shadow: 0px 0px 9px #00000066;
  text-align: center;
}
.demo .text {
  font-size: 28px;
  font-weight: bolder;
  color: #666666;
}
.demo .btn {
  font-size: 20px;
  padding: 0 10px;
  height: 32px;
  min-width: 80px;
  cursor: pointer;
}
</style>
./JSXCounter/JSXCounter
