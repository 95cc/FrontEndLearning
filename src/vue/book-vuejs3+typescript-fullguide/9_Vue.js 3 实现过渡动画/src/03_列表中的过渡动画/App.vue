<template>
  <div>
    <h1>列表中的过渡动画</h1>

    <h2>1. TransitionGroup 的基本使用</h2>
    <button @click="addNum">添加数字</button>
    <button @click="removeNum">删除数字</button>
    <!-- tag="p" 指定p元素作为容器元素来渲染 -->
    <transition-group tag="p" name="why">
      <span v-for="item in numbers" :key="item" class="item">{{ item }}</span>
    </transition-group>

    <h2>2. 列表元素的过渡动画</h2>
    <transition-group tag="p" name="why">
      <span v-for="item in numbers" :key="item" class="item">{{ item }}</span>
    </transition-group>

    <h2>3. 案例：列表元素的交替过渡</h2>
    <input v-model="keyword" placeholder="搜索" />
    <transition-group
      tag="ul"
      name="why2"
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
      <li v-for="(item, index) in showNames" :key="item" :data-index="index">
        {{ item }}
      </li>
    </transition-group>
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  name: 'App',
  components: {},
  data() {
    return {
      numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      numCounter: 10,
      names: ['abc', 'cba', 'nba', 'why', 'lilei', 'hmm', 'kobe', 'james'],
      keyword: '',
    }
  },
  methods: {
    addNum() {
      // 1. 在随机位置添加一个数字
      this.numbers.splice(this.randomIndex(), 0, this.numCounter++)
    },
    removeNum() {
      // 2. 删除随机位置的数字
      this.numbers.splice(this.randomIndex(), 1)
    },
    randomIndex() {
      // 3. 获取numbers数组的随机索引
      return Math.floor(Math.random() * this.numbers.length)
    },
    // el是将要添加到ul的li元素。注意：添加n个li元素会回调n次
    beforeEnter(el) {
      el.style.opacity = 0
      el.style.height = 0
    },
    enter(el, done) {
      gsap.to(el, {
        opacity: 1,
        height: '1.5em',
        delay: el.dataset.index * 0.25,
        onComplete: done,
      })
    },
    leave(el, done) {
      gsap.to(el, {
        opacity: 0,
        height: 0,
        delay: el.dataset.index * 0.25,
        onComplete: done,
      })
    },
  },
  computed: {
    showNames() {
      return this.names.filter((item) => item.indexOf(this.keyword) != -1)
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

.item {
  margin-left: 10px;
  /* 使用span元素实现动画，需要将行内元素改为行内块级标签 */
  display: inline-block;
}

.why-enter-from,
.why-leave-to {
  /* transform: rotate(90deg); */
  transform: translateY(30px);
  opacity: 0;
}

.why-enter-active,
.why-leave-active {
  transition: all 1s ease;
}

.why-move {
  /* 为需要移动的span元素添加过渡效果 */
  transition: transform 1s ease;
}

/* 解决删除时，没有动画问题 */
.why-leave-active {
  /* span元素脱离标准文档流 */
  position: absolute;
}

/* why2 */
.why2-enter-from,
.why2-leave-to {
  opacity: 0;
}

.why2-enter-active,
.why2-leave-active {
  transition: all 1s ease;
}

/* 为需要移动的span元素添加过渡效果 */
.why2-move {
  transition: transform 1s ease;
}

/* 解决删除时，没有动画问题 */
.why2-leave-active {
  position: absolute; /* span元素脱离标准文档流 */
}
</style>
