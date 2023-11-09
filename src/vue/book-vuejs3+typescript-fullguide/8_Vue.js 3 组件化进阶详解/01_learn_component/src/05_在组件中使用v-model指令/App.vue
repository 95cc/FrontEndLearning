<template>
  <div>
    <h4>App组件message变量: {{ message }}</h4>
    <h4>App组件message1变量: {{ message1 }}</h4>

    <button @click="changeMessage">App组件修改message</button>

    <h2>1. v-model的基本使用方法</h2>
    <HyInput v-model="message" />
    <!-- 下面的写法等价上面的写法 -->
    <HyInput :modelValue="message" @update:model-value="message = $event" />
    <HyInput
      :validModelValue="message1"
      @update:valid-model-value="message1 = $event"
    />

    <h2>2. v-model绑定computed</h2>
    <h4>App组件message2变量: {{ message2 }}</h4>
    <HyInputComputed v-model="message2" />

    <h3>3. 组件上应用多个v-model</h3>
    <h4>App组件multipleInputValue1变量: {{ multipleInputValue1 }}</h4>
    <h4>App组件multipleInputValue2变量: {{ multipleInputValue2 }}</h4>
    <HyMultipleInput
      v-model="multipleInputValue1"
      v-model:title="multipleInputValue2"
    />

    <h3>4. v-model绑定对象类型</h3>
    <h4>App组件formData.name变量: {{ formData.name }}</h4>
    <h4>App组件formData.title变量: {{ formData.title }}</h4>
    <HyForm v-model="formData" />
  </div>
</template>

<script>
import HyInput from './1_HyInput'
import HyInputComputed from './2_HyInput_computed'
import HyMultipleInput from './3_HyMultipleInput '
import HyForm from './4_HyForm'

export default {
  name: 'App',
  components: {
    HyInput,
    HyInputComputed,
    HyMultipleInput,
    HyForm,
  },
  data() {
    return {
      message: 'Hello World',
      message1: 'test1',
      message2: 'test2',
      multipleInputValue1: 'multipleInputValue1',
      multipleInputValue2: 'multipleInputValue2',
      formData: {
        name: 'coder',
        title: 'why',
      },
    }
  },
  methods: {
    changeMessage() {
      this.message = 'coderwhy'
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
