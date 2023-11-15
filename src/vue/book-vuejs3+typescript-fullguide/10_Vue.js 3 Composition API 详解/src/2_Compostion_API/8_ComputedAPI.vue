<script>
import { ref, computed } from 'vue'

export default {
  setup() {
    const firstName = ref('Kobe')
    const lastName = ref('Bryant')

    // 1. 方式一：传入一个getter函数。computed返回值是一个ref对象
    const fullName = computed(() => firstName.value + ' ' + lastName.value)
    const changeName = () => {
      firstName.value = 'James'
    }

    // 2. 方式二：传入一个对象，对象包含get和set方法
    const fullName1 = computed({
      get: () => firstName.value + ' ' + lastName.value,
      set(newVal) {
        const names = newVal.split(' ')
        firstName.value = names[0]
        lastName.value = names[1]
      },
    })

    return {
      firstName,
      lastName,
      fullName,
      changeName,
      fullName1,
    }
  },
}
</script>

<template>
  <div>
    <h4>fullName: {{ fullName }}</h4>
    <button @click="firstName = 'James'">修改fullName</button>
    <h4>fullName1: {{ fullName1 }}</h4>
    <button @click="fullName1 = 'abc def'">修改fullName1</button>
  </div>
</template>
