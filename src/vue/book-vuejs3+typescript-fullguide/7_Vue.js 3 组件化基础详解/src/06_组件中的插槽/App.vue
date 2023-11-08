<script>
import MySlotCpn from './MySlotCpn.vue'
import MyButton from './MyButton.vue'
import NavBar_jumingchacao from './NavBar_jumingchacao.vue'

export default {
  components: {
    MySlotCpn,
    MyButton,
    NavBar_jumingchacao,
  },
  data() {
    return {
      abc: 'test',
    }
  },
}
</script>

<template>
  <div class="app">
    <h2>1. 基本使用</h2>
    <!-- 1. 默认没有插入内容 -->
    <MySlotCpn />
    <!-- 2. 插入一个元素 -->
    <MySlotCpn>
      <button>我是按钮</button>
    </MySlotCpn>
    <!-- 3. 插入一个文本 -->
    <MySlotCpn> 我的普通的文本 </MySlotCpn>
    <!-- 4. 插入一个组件 -->
    <MySlotCpn> <MyButton /> </MySlotCpn>
    <!-- 5. 插入多个内容 -->
    <MySlotCpn>
      <span>我是span</span>
      <button>我是button</button>
      <strong>我是strong</strong>
      我是文本
    </MySlotCpn>

    <h2>2. 具名插槽</h2>
    <NavBar_jumingchacao :name="abc">
      <template v-slot:left>
        <button>左边按钮</button>
      </template>
      <template v-slot:center>
        <h4>我的标题</h4>
      </template>
      <template v-slot:right>
        <i>右边的i元素</i>
      </template>
      <template v-slot:[abc]>
        <div>测试动态插槽名的使用</div>
      </template>
    </NavBar_jumingchacao>

    <!-- 简写 -->
    <h3>具名插槽的简写</h3>
    <NavBar_jumingchacao :name="abc">
      <template #left>
        <button>左边按钮</button>
      </template>
      <template #center>
        <h4>我的标题</h4>
      </template>
      <template #right>
        <i>右边的i元素</i>
      </template>
      <template #[abc]>
        <div>测试动态插槽名的使用 {{ abc }}</div>
      </template>
    </NavBar_jumingchacao>
  </div>
</template>
