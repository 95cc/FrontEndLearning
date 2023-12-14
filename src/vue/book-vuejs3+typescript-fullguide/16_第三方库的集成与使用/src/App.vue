<template>
  <div>
    <div>
      <router-link to="/home">首页</router-link>
      <router-link class="tab" to="/about">关于</router-link>
    </div>
    <div style="width: 300px; height: 300px; border: 1px solid #ddd">
      <!-- <router-view>也提供了一个v-slot，可以使用<transition>和<keep-alive>组件包裹路由组件 -->
      <!-- 为router-view添加v-slot指令 -->
      <router-view v-slot="props">
        <transition name="why">
          <component :is="props.Component"></component>
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {},
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
