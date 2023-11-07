<script>
// 该组件props为字符串类型的数组
import ShowMessage1 from './1_ShowMessage1.vue'
import ShowMessage2 from './2_ShowMessage2.vue'
import NoPropAttribute1 from './4_NoPropAttribute1.vue'
import NoPropAttribute2_inheritAttrs_false from './5_NoPropAttribute2_inheritAttrs_false.vue'
import NoPropAttribute3 from './6_NoPropAttribute3.vue'
import CounterOperation from './7_CounterOperation.vue'
import CounterOperation2 from './8_CounterOperation2.vue'
import TabControl from './9_TabControl'

export default {
  components: {
    ShowMessage1,
    ShowMessage2,
    NoPropAttribute1,
    NoPropAttribute2_inheritAttrs_false,
    NoPropAttribute3,
    CounterOperation,
    CounterOperation2,
    TabControl,
  },
  data() {
    return {
      title: '我的标题title',
      content: '我的内容content',
      message: {
        title: '我是标题message.title',
        content: '我的内容message.content',
      },
      counter: 1,
      titles: ['衣服', '鞋子', '裤子'],
      contents: ['衣服页面', '鞋子页面', '裤子页面'],
      curIndex: 0,
    }
  },
  methods: {
    addNNum(num, name, age) {
      console.log(name, age)
      this.counter += num
    },
    titleClick(index) {
      this.curIndex = index
    },
  },
}
</script>

<template>
  <div class="app">
    <h1>父子组件的相互通信</h1>

    <!-- 1. 直接传递字符串 -->
    <ShowMessage1 title="我的标题" content="我的内容" />
    <!-- 2. 绑定字符串类型的变量 -->
    <ShowMessage1 :title="title" :content="content" />
    <!-- 3. 绑定对象中字符串类型的属性 -->
    <ShowMessage1 :title="message.title" :content="message.content" />
    <!-- 4. 直接绑定一个对象，会自动将对象的每个属性拆出来逐一绑定 -->
    <ShowMessage1 v-bind="message" />

    <ShowMessage2 title="我的标题2" content="我的内容2" />

    <h2>传递非props的属性：id、class和name</h2>
    <!-- 传递非props的属性：id、class和name -->
    <NoPropAttribute1 id="coder" class="why" name="coderwhy" />
    <div>
      {{ `
      <div class="no-prop-attribute why" id="coder" name="coderwhy">
        改组件没有定义任何的props属性
      </div>
      ` }}
    </div>

    <h2>禁用非Props的属性继承</h2>
    <!-- 禁用非Props的属性继承 -->
    <NoPropAttribute2_inheritAttrs_false
      id="coder"
      class="why"
      name="coderwhy"
    />

    <h2>多个根节点，手动绑定非Props的属性</h2>
    <NoPropAttribute3 class="why" />

    <h2>子组件传递数据给父组件</h2>
    <h4>当前计数：{{ counter }}</h4>
    <CounterOperation @add="counter++" @sub="counter--" @addN="addNNum" />
    <CounterOperation2 @add="counter++" @sub="counter--" @addN="addNNum" />

    <h2>TabControl案例</h2>
    <div>
      <TabControl :titles="titles" @titleClick="titleClick" />
      <h3>{{ contents[curIndex] }}</h3>
    </div>
  </div>
</template>
