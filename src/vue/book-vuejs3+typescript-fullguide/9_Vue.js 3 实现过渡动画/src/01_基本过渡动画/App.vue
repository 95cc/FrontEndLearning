<template>
  <div>
    <h1>基本过渡动画</h1>

    <h2>1. 认识过渡动画</h2>
    <button @click="show = !show">显示/隐藏</button>
    <transition name="why">
      <h4 v-if="show" style="border: 1px solid #ddd; width: 100px">
        Hello World
      </h4>
    </transition>

    <h2>2. CSS的Animation动画</h2>
    <button @click="show1 = !show1">显示/隐藏</button>
    <transition name="why1">
      <h4 v-if="show1" style="border: 1px solid #ddd; width: 100px">
        Hello World
      </h4>
    </transition>

    <h2>3. Transiton组件的常见属性</h2>
    <div>
      &lttransition&gt是Vue.js3中用于在元素插入或移除时添加过渡效果的组件。
      <ul>
        <li>name: 指定过渡类名的基础名称。</li>
        <li>type: 指定过渡类型。可选值为: transiton(默认)、animation</li>
        <li>mode: 指定过渡模式。可选值为: in-out、out-in，默认为空</li>
        <li>appear: 指定是否在初次渲染时执行过度动画，默认为false</li>
      </ul>
    </div>

    <h2>4. 同时用transition和animation</h2>
    <button @click="show2 = !show2">显示/隐藏</button>
    <transition name="why2" type="transition">
      <h4 v-if="show2" style="border: 1px solid #ddd; width: 100px">
        Hello World
      </h4>
    </transition>

    <h2>5. 过渡模式</h2>
    <button @click="show3 = !show3">显示/隐藏</button>
    <transition name="why2" type="transition" mode="out-in">
      <h4 v-if="show3" style="border: 1px solid #ddd; width: 100px">
        Hello World
      </h4>
      <h4 v-else style="border: 1px solid #ddd; width: 100px">
        你好啊，李银河
      </h4>
    </transition>

    <h2>6. 动态组件的切换</h2>
    <button @click="show4 = !show4">切换组件</button>
    <transition name="why" mode="out-in">
      <component :is="show4 ? 'home' : 'about'"></component>
    </transition>
  </div>

  <h2>7. 指定初次渲染的过渡动画</h2>
  <button @click="show = !show">显示/隐藏</button>
  <transition name="why" appear>
    <h4 v-if="show" style="border: 1px solid #ddd; width: 100px">
      Hello World
    </h4>
  </transition>
</template>

<script>
import Home from './Home'
import About from './About'

export default {
  name: 'App',
  components: {
    Home,
    About,
  },
  data() {
    return {
      show: true,
      show1: true,
      show2: true,
      show3: true,
      show4: true,
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

/* 实现h4元素的过渡动画 */
/* 1. h4元素进入之前和离开之后应用的样式 */
.why-enter-from,
.why-leave-to {
  opacity: 0;
}
/* 2. h4元素开始进入和离开应用的样式 */
.why-enter-to,
.why-leave-from {
  opacity: 1;
}
/* 3. h4元素在整个进入/离开过渡的阶段中应用的样式 */
.why-enter-active,
.why-leave-active {
  transition: opacity 2s ease; /* 过渡效果 */
}

/* CSS animation动画的实现 */
/* 1. h4元素在整体进入过渡阶段中应用的样式 */
.why1-enter-active {
  animation: bounce 1s ease;
}
/* 2. h4元素在整体离开过渡阶段中应用的样式 */
.why1-leave-active {
  animation: bounce 1s ease reverse;
}
@keyframes bounce {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    tarnsform: scale(1);
  }
}

/* 同时使用 transition 和 animation */
/* 1. transition动画 */
.why2-enter-form,
.why2-leave-to {
  opacity: 0;
}
.why2-enter-to,
.why2-leave-from {
  opacity: 1;
}
.why2-enter-active,
.why2-leave-active {
  transition: opacity 1s ease;
}
/* 2. animation动画 */
.why2-enter-active {
  animation: bounce2 1s ease;
}
.why2-leave-active {
  animation: bounce2 1s ease reverse;
}
@keyframes bounce2 {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    tarnsform: scale(1);
  }
}
</style>
