<template>
  <div>
    <h1>VueX 状态管理 (npm install vuex@next)</h1>
    <p >
      Vuex 背后的基本思想
      <p>通过插件的形式挂载到Vue.js 3实例上，任何组件都能从该单例上获取状态或触发行为。这种方式能够更好地控制和追踪状态的变化，同时能够更好地实现兄弟组件之间共享数据。</p>
    </p>

    <h2>1. 认识Vuex 状态管理</h2>
    <div>当前计数: {{ $store.state.counter }}</div>
    <div><button @click="$store.commit('increment')">+1</button></div>
    <div><button @click="$store.commit('decrement')">-1</button></div>
    <div><button @click="increment">+1</button></div>
    <div><button @click="decrement">-1</button></div>

    <h2>2. Vuex 的核心概念</h2>
    <p>Vue.js 3的响应式系统和双向数据绑定是Vuex底层原理的基础。Vuex的核心概念包括以下内容</p>
    <ul>
      <li>1. state: 即存储数据的地方,所有组件都可以访问和使用store中的状态。</li>
      <li>2. getters: 可以理解为store中的计算属性,用于从store中的state中派生一些状态。</li>
      <li>3. mutations: 用于同步修改store中的状态,必须是同步函数。</li>
      <li>4. actions: 用于异步提交mutations,可以包含任意异步操作。</li>
      <li>5. modules: 用于将store分割成多个模块,每个模块可以维护自己的state/getters/mutation/action。</li>
    </ul>
    <h3>2.1 action</h3>
    <h4>2.1.1 mapState_computed</h4>
    <mapState_computed/>
    <h4>2.1.2 mapState_setup</h4>
    <mapState_setup/>
    <h4>2.1.3 useState封装后使用</h4>
    <useStateEncapSulation/>

    <h3>2.2 getters</h3>
    <mapGetters_computed/>
    <useGettersEncapSulation/>

    <h3>2.3 mutations</h3>

    <h3>2.4 actions</h3>

    <h3>2.5 modules</h3>
  </div>
</template>

<script>
import { useStore } from 'vuex'
// ---
import mapState_computed from './pages/01_mapState_computed'
import mapState_setup from './pages/02_mapState_setup'
import useStateEncapSulation from './pages/03_useState封装后使用'
import mapGetters_computed from './pages/04_mapGetters_computed'
import useGettersEncapSulation from './pages/05_useGetters封装后使用'

export default {
  name: 'App',
  components: {
    mapState_computed,
    mapState_setup,
    useStateEncapSulation,
    mapGetters_computed,
    useGettersEncapSulation
  },
  methods: {
    increment() {
      this.$store.commit('increment')
    }
  },
  setup() {
    const store = useStore()

    const decrement = () => {
      store.commit('decrement')
    }

    return {
      decrement
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
h1,
h2,
h3 {
  text-decoration: underline;
  color: orange;
}

.border {
  border: 1px solid #ddd
}
</style>
