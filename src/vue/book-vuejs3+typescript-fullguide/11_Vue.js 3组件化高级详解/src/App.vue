<template>
  <div>
    <h2>1. render函数</h2>
    <h3>1.1 h函数的基本使用</h3>
    <RenderExample class="border" />
    <RenderExample_Setup class="border" />
    <h3>1.2 render函数实现计数器</h3>
    <RenderCounter class="border" />
    <h3>1.3 setup函数实现计数器</h3>
    <RenderSetupCounter class="border" />
    <h3>1.4 在render函数中实现插槽</h3>
    <RenderSlot />
    <h3>1.5 组件的JSX语法</h3>
    <RenderJSX />

    <h2>2. 自定义指令</h2>
    <h3>2.1 自定义指令的基本使用</h3>
    <h4>2.1.1 默认方式</h4>
    <DefaultImp />
    <h4>2.1.2 自定义一个v-focus局部指令</h4>
    <CustomLocalDirective />
    <h4>2.1.3 自定义一个v-focus全局指令</h4>
    <div style="border: 1px solid #ddd; margin: 8px">
      <p>自定义全局指令</p>
      <input type="text" v-focus />
    </div>
    <h3>2.2 自定义指令的生命周期函数</h3>
    <DirectiveLifeCycle />
    <h3>2.3 自定义指令的参数和修饰符</h3>
    <DirectiveParamAndModifier />
    <h3>2.4 案例：自定义时间格式化指令</h3>
    <h4 v-format-time>{{ Number(1645710167) }}</h4>
    <!-- prettier-ignore -->
    <h4 v-format-time="'YYYY/MM/DD'">{{ Number(1645710167) }}</h4>

    <h2>3. teleport内置组件</h2>
    <TeleportExample />

    <h2>4. Vue.js 3 的插件开发</h2>
    <p>全局属性$name: {{ $name }}</p>
    <p>全局属性$age: {{ $age }}</p>

    <h2>5. nextTick函数的原理</h2>
    <h3>5.1 在单击按钮后立即获取h4元素的高度（错误）</h3>
    <NextTickExample1 />
    <h3>5.2 在onUpdated生命周期函数中获取h4元素的高度（不推荐）</h3>
    <NextTickExample2 />
    <h3>5.3 使用nextTick函数</h3>
    <NextTickExample3 />

    <div class="border" style="border-color: orange; border-width: 5px">
      nextTick函数的实现原理

      <p>
        浏览器的事件循环:
        浏览器在执行JavaScript代码时，如遇到DOM事件、setTimeout函数、异步操作等回调函数，那么这些函数会被加入事件队列。
      </p>
      <p>浏览器的事件循环事实上维护着以下两个队列：</p>
      <p>
        1. 宏任务队列: 存放ajax、setTimeout、setInterval、DOM监听、UI
        Rendering等任务
      </p>
      <p>
        2. 微任务队列: 存放Promise then回调、Mutation Observer
        API、queueMicrotask等任务
      </p>
      <p>
        需要注意的是,
        浏览器在执行任何一个宏任务之前，都会先查看微任务队列中是否有需要执行的任务。如有，则优先执行微任务队列的任务。在宏任务执行前，必须保证微任务队列是空的，如果不为空，就优先执行微任务队列中的任务(这里的"任务"指的是回调函数)
      </p>

      <div class="border" style="border-color: orange; border-width: 5px">
        上面案例分析：
        <p>
          1.
          当单击"添加内容"按钮时，会触发一次DOM监听事件，该事件的回调函数将会被加入宏任务队列。当该任务在调用栈执行时，会修改message中的value。由于修改了message，因此Vue.js
          3框架内部会将有关的watch回调函数、组件更新的回调函数和生命周期的回调函数加入微任务队列中。
        </p>
        <p>
          2.
          当我们调用nextTick函数时，nextTick内部会使用Promise包裹回调函数，目的是将该回调函数加入微任务队列。队列中的任务都是先进先出的，所以当执行完watch回调函数、组件更新的回调函数和生命周期的回调函数之后，就会执行nextTick的回调函数。这个过程就称为一次tick。
        </p>
        <p>
          因此，在上述案例中，nextTick函数的回调函数将会推迟到下一个DOM更新周期之后执行。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { getCurrentInstance } from 'vue'
// ---
import RenderExample from './01_render函数的使用/01_RenderExample'
import RenderExample_Setup from './01_render函数的使用/02_RenderExample_Setup'
import RenderCounter from './01_render函数的使用/03_RenderCounter'
import RenderSetupCounter from './01_render函数的使用/04_RenderSetupCounter'
import RenderSlot from './01_render函数的使用/05_RenderSlot'
import RenderJSX from './02_JSX语法的使用/01_RenderJSX'
import DefaultImp from './03_自定义指令/1_DefaultImp'
import CustomLocalDirective from './03_自定义指令/2_CustomLocalDirective'
import DirectiveLifeCycle from './03_自定义指令/3_DirectiveLifeCycle'
import DirectiveParamAndModifier from './03_自定义指令/4_DirectiveParamAndModifier'
import TeleportExample from './04_teleport内置组件/1_teleport'
import NextTickExample1 from './06_nextTick的使用/1_NextTickExample1'
import NextTickExample2 from './06_nextTick的使用/2_NextTickExample2'
import NextTickExample3 from './06_nextTick的使用/3_NextTickExample3'

export default {
  name: 'App',
  components: {
    RenderExample,
    RenderExample_Setup,
    RenderCounter,
    RenderSetupCounter,
    RenderSlot,
    RenderJSX,
    DefaultImp,
    CustomLocalDirective,
    DirectiveLifeCycle,
    DirectiveParamAndModifier,
    TeleportExample,
    NextTickExample1,
    NextTickExample2,
    NextTickExample3,
  },
  setup() {
    // 获取组件实例，相当于this
    const instance = getCurrentInstance()
    // 通过组件实例访问全局属性 $name
    console.log(
      'setup name=',
      instance.appContext.config.globalProperties.$name
    )
  },
  mounted() {
    console.log('mounted name=', this.$name)
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

h2,
h3 {
  text-decoration: underline;
  color: orange;
}

.border {
  border: 1px solid gray;
}
</style>
