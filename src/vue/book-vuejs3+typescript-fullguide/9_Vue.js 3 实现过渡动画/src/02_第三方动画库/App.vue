<template>
  <div>
    <h1>第三方动画库</h1>

    <h2>1. Animate.css (npm i animate.css)</h2>
    <button @click="show = !show">显示/隐藏</button>
    <transition name="why">
      <h4 v-if="show" style="border: 1px solid #ddd; width: 100px">
        Hello World
      </h4>
    </transition>

    <h4>自定义过渡类名</h4>
    <ul>
      <li>enter-from-class: 自定义进入过渡的开始状态的类名</li>
      <li>enter-active-class: 自定义进入过渡生效时的状态</li>
      <li>enter-to-class: 自定义进入过渡的结束状态</li>
      <li>leave-from-class: 自定义离开过渡的开始状态</li>
      <li>leave-active-class: 自定义离开过渡生效时的状态</li>
      <li>leave-to-class: 自定义离开过渡的结束状态</li>
    </ul>

    <h2>2. 过渡系统和第三方动画库结合使用</h2>
    <button @click="show1 = !show1">显示/隐藏</button>
    <transition
      enter-active-class="animate__animated animate__backInLeft"
      leave-active-class="animate__animated animate__backOutRight"
    >
      <h4 v-if="show1" style="border: 1px solid #ddd; width: 100px">
        Hello World
      </h4>
    </transition>

    <h2>3. GSAP动画库 (GreenSock Animation Platform) (npm install gsap)</h2>
    <button @click="show2 = !show2">显示/隐藏</button>
    <transition
      appear
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
    >
      <h4 v-if="show2" style="border: 1px solid #ddd; width: 100px">
        Hello World
      </h4>
    </transition>

    <h2>4. GSAP实现数字变化效果</h2>
    <input type="number" v-model="counter" />
    <h4>当前计数: {{ showNumber.toFixed(0) }}</h4>
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  name: 'App',
  components: {},
  data() {
    return {
      show: true,
      show1: true,
      show2: true,
      counter: 1,
      showNumber: 0,
    }
  },
  watch: {
    counter(newVal) {
      // 参数一：this位目标对象，这里是Vue实例
      // 参数二：为Vue实例中的showNumber属性添加动画，即在1s中showNumber由1过渡到input输入的数值
      gsap.to(this, {
        duration: 5,
        showNumber: newVal,
      })
    },
  },
  methods: {
    // 1.在元素被插入DOM之前被调用
    beforeEnter(el) {
      console.log('beforeEnter', el)
    },
    // 2. 在元素被插入DOM之后的下一帧被调用
    // 参数一：el表示当前DOM对象；参数二：done表示动画结束的回调函数
    enter(el, done) {
      console.log('enter', el)
      // h4元素在整个进入过渡的阶段中应用了以下动画
      gsap.from(el, {
        scale: 0,
        x: 200,
        onComplete: done, // 调用回调函数done表示过渡介绍
      })
      // done()
    },
    // 3. 当进入过渡完成时调用
    afterEnter(el) {
      console.log('afterEnter')
    },
    // 4. 在leave狗子之前调用
    beforeLeave(el) {
      console.log('beforeLeave')
    },
    // 5. 在离开过渡开始时调用
    leave(el, done) {
      console.log('leave', el)
      // h4元素在整个离开过渡的阶段中应用了以下动画
      gsap.to(el, {
        scale: 0,
        x: 200,
        onComplete: done, // 调用回调函数done表示过渡介绍
      })
      // done()
    },
    // 6. 在离开过渡完成，且元素已从DOM中移除时调用
    afterLeave(el) {
      console.log('afterLeave')
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
}

.why-enter-active {
  /* 使用Animate.css的backInLeft从左边进入的动画 */
  animation: backInLeft 1s ease-in;
}
.why-leave-active {
  /* 使用Animate.css的 backOutRight 从右边离开的动画 */
  animation: backOutRight 1s ease-in;
}

/* .animate__animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-duration: var(--animate-duration);
  animation-duration: var(--animate-duration);
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
.animate__backInLeft {
  -webkit-animation-name: backInLeft;
  animation-name: backInLeft;
}
.animate__backOutRight {
  -webkit-animation-name: backOutRight;
  animation-name: backOutRight;
} */
</style>
