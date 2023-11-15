<script>
import { reactive, toRefs, toRef } from 'vue'

export default {
  setup() {
    const info = reactive({
      name: 'why',
      age: 18,
    })
    // 1. ES6语法直接解构info对象，会失去响应式
    let { name, age } = info

    // 2. toRefs函数讲reactive返回对象中所有属性都转换成ref对象
    let { name: name1, age: age1 } = toRefs(info)

    // 3. toRef函数将某个属性转换为ref对象
    let name2 = toRef(info, 'name') // 仅将name属性转换为ref对象
    let age2 = toRef(info, 'age') // 仅将age属性转换为ref对象

    const changAge = () => {
      info.age++
      console.log(info.age)
    }

    return {
      name,
      age,
      name1,
      age1,
      name2,
      age2,
      changAge,
    }
  },
}
</script>

<template>
  <div>
    <button @click="changAge">修改age++</button>

    <h4>1. ES6解构reactive响应式对象</h4>
    <div>{{ name }} - {{ age }}</div>

    <h4>2. toRefs解构reactive响应式对象</h4>
    <div>{{ name1 }} - {{ age1 }}</div>

    <h4>3. roRef解构reactive响应式对象中的单个属性</h4>
    <div>{{ name2 }} - {{ age2 }}</div>
  </div>
</template>
