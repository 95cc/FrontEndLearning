<template>
  <div class="app">
    <v-info />
    <v-text />
    <v-list />
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import VInfo from './cmps/info.vue'
import VText from './cmps/text.vue'
import VList from './cmps/list.vue'
</script>

<style>
.app {
  width: 600px;
  padding: 10px;
  margin: 10px auto;
  box-shadow: 0px 0px 9px #00000066;
  text-align: center;
}
</style>
