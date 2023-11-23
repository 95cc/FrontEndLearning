<template>
  <div>
    <h1>12 Vue Router路由 (npm install vue-router)</h1>
    <div>
      <!-- <router-link class="tab" to="/home">首页</router-link> -->
      <!-- 等价于上面的 -->
      <!-- <router-link class="tab" :to="{ path: '/home' }">首页</router-link> -->

      <!-- <router-link>组件的作用域插槽 -->
      <router-link to="/home" custom v-slot="props">
        <strong @click="props.navigate">首页: </strong>
        <span>{{ props.href }}</span>
        <span> - {{ props.isActive }}</span>
      </router-link>

      <router-link class="tab" to="/user/codercc/id/100">用户</router-link>
      <router-link class="tab" to="/about">关于</router-link>
      <router-link class="tab" to="/about" replace>关于(replace)</router-link>
      <button @click="jumpToAbout">关于</button>
      <button @click="jumpToAboutReplace">关于(replace)</button>
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

<script>
import { useRouter } from 'vue-router'

export default {
  name: 'App',
  components: {},
  setup() {
    // 获取router对象，即创建的路由对象
    const router = useRouter()
    const jumpToAbout = () => {
      // 跳转到“关于”页面
      // router.push('/about')
      router.push({
        path: '/about',
        query: {
          name: 'coder',
          age: 18,
        },
      })
    }
    const jumpToAboutReplace = () => {
      // 跳转到“关于”页面
      // router.push('/about')
      router.replace({
        path: '/about',
        query: {
          name: 'coder',
          age: 18,
        },
      })
    }

    return {
      jumpToAbout,
      jumpToAboutReplace,
    }
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

h1,
h2,
h3 {
  text-decoration: underline;
  color: orange;
}

.border {
  border: 1px solid gray;
}

.tab {
  border: 1px solid #ddd;
  margin-right: 8px;
  padding: 2px 20px;
  text-decoration: none;
}

.why-enter-from,
.why-leave-to {
  opacity: 0;
}

.why-enter-active,
.why-leave-active {
  transition: opacity 1s ease;
}
</style>
