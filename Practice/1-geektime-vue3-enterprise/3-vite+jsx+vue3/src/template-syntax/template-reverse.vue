<template>
  <div class="app">
    <h3>Template-Reverse</h3>
    <div v-if="isReverse === false">
      <Module01 />
      <Module02 />
      <Module03 />
      <Module04 />
    </div>
    <div v-else>
      <Module04 />
      <Module03 />
      <Module02 />
      <Module01 />
    </div>
    <button class="btn" @click="onClick">转换顺序: {{ isReverse }}</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Module01 from '../Module/module1.vue'
import Module02 from '../Module/module2.vue'
import Module03 from '../Module/module3.vue'
import Module04 from '../Module/module4.vue'
const isReverse = ref(false)
const onClick = () => {
  isReverse.value = !isReverse.value
}
</script>

<style>
.app {
  width: 300px;
  padding: 10px;
  margin: 10px auto;
  box-shadow: 0px 0px 9px #00000066;
  text-align: center;
}
.app .btn {
  font-size: 20px;
  padding: 0 10px;
  height: 32px;
  min-width: 80px;
  cursor: pointer;
}
</style>
