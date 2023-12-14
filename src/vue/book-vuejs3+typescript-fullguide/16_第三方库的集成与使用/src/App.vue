<template>
  <div>
    <!-- Vue Router -->
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

    <!-- Vuex -->
    <div>当前计数: {{ counter }}</div>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
// ---
import type { IRootState } from './store'

export default defineComponent({
  name: 'App',
  components: {},
  computed: {
    counter: () => {},
  },
  setup() {
    const store = useStore<IRootState>()
    const counter = computed(() => {
      return store.state.counter
    })
    const increment = () => store.commit('increment')
    const decrement = () => store.commit('decrement')

    return {
      counter,
      increment,
      decrement,
    }
  },
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
