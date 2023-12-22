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

    <!-- Element Plus -->
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>

    <el-button @click="showMsg">使用Elmessage</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
// 手动导入 ElButton 组件
import { ElButton } from 'element-plus'
// 当使用了unplugin-element-plus插件，并且只使用组件的API时，我们还需手动导入样式
import 'element-plus/es/components/message/style/css'
import { ElMessage } from 'element-plus'
// ---
import type { IRootState } from './store'

export default defineComponent({
  name: 'App',
  components: {
    ElButton: ElButton, // 局部注册组件
  },
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
    const showMsg = () => {
      ElMessage.success('成功')
    }

    return {
      counter,
      increment,
      decrement,
      showMsg,
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
