<template>
  <div>
    <button
      v-for="item in tabs"
      :key="item"
      @click="itemClick(item)"
      :class="{
        active: item == curTab,
      }"
    >
      {{ item }}
    </button>

    <h2>1. 根据v-if的条件，显示不同的组件</h2>
    <!-- 根据v-if的条件，显示不同的组件 -->
    <template v-if="curTab == 'home'">
      <Home />
    </template>
    <template v-if="curTab == 'about'">
      <About />
    </template>
    <template v-if="curTab == 'category'">
      <Category />
    </template>

    <h2>
      2.
      动态组件的实现：使用&ltcomponent&gt组件，并通过其特殊属性(is)动态渲染不同的组件
    </h2>
    <!-- 动态组件的实现(is属性是动态绑定组件的名称。例如 is='home'，代表绑定<home />组件) -->
    <component :is="curTab"></component>

    <h2>3. 动态组件的传参</h2>
    <component
      :is="curTab"
      name="coderwhy"
      :age="18"
      @pageClick="pageClick"
    ></component>

    <h2>4. keep-alive的使用</h2>
    <!-- 用keep-alive组件保留动态组件的状态，同时会保留其对应的子孙组件的状态 -->
    <keep-alive>
      <component
        :is="curTab"
        name="coderwhy"
        :age="18"
        @pageClick="pageClick"
      ></component>
    </keep-alive>

    <h2>5. keep-alive的属性: include/exclude/max</h2>
    <!-- 'home,about' -->
    <!-- '/home|about/' -->
    <!-- '['home', 'about']' -->
    <!-- <keep-alive include="home,about"> -->
    <!-- <keep-alive :include="/home|about/"> -->
    <keep-alive :include="['home', 'about']">
      <component
        :is="curTab"
        name="coderwhy"
        :age="18"
        @pageClick="pageClick"
      ></component>
    </keep-alive>
  </div>
</template>

<script>
import Home from './Home'
import About from './About'
import Category from './Category'

export default {
  name: 'App',
  components: {
    Home,
    About,
    Category,
  },
  data() {
    return {
      tabs: ['home', 'about', 'category'],
      curTab: 'home',
    }
  },
  methods: {
    itemClick(item) {
      this.curTab = item
    },
    pageClick(value) {
      console.log(value)
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.active {
  color: red;
}
</style>
