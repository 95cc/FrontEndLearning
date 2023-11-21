<template>
  <div class="border">
    <button v-why:info.aaa.bbb="{ name: 'coder', age: 18 }">
      指令的参数、修饰符、值 v-why:info.aaa.bbb="{ name: 'coder', age: 18 }"
    </button>
  </div>
</template>

<script>
export default {
  directives: {
    why: {
      created(el, bindings, vnode, preVnode) {
        // 打印bindings参数
        console.log(bindings)
        console.log('v-why 参数:', bindings.arg)
        console.log('v-why 修饰符:', bindings.modifiers)
        console.log('v-why 值:', bindings.value)
      },
    },
  },
}
</script>
