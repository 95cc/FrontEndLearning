<template>
  <div>
    <h1>Compotision API</h1>
    <p>
      使用Composition API方式来编写代码, 需要在setup函数中编写或使用&ltscript
      setup&gt语法糖
    </p>

    <h2>1 setup函数的基本使用</h2>
    <h3>1.1 setup函数的参数</h3>
    <SetupProps
      id="SetupProps"
      class="gray-border"
      message="学习setup函数的参数"
    />
    <h3>1.2 setup函数的返回值</h3>
    <SetupReturn />

    <h3>1.3 setup函数的this</h3>
    <p>
      this并没有指向组件实例。在调用setup函数之前，data、computed、methods等都没有被解析。Vue.js
      3也没有为setup函数绑定this，因此无法在setup中获取this。
    </p>

    <h2>2. 数据响应式 API</h2>
    <h3>2.1 reactive</h3>
    <ReactiveAPI />

    <h3>2.2 ref</h3>
    <refAPI />

    <h2>3. 响应式工具 reactive</h2>
    <h3>3.1 readonly</h3>
    readonly函数可接收以下三种类型的参数:
    <ol>
      <li>普通对象</li>
      <li>reactive函数返回的响应式对象</li>
      <li>ref函数返回的响应式对象</li>
    </ol>
    <div>
      readonly函数本质: 返回代理对象的setter方法被劫持，不允许对其进行修改
    </div>
    <ReadonlyAPI />

    <h3>3.2 isProxy</h3>
    <div>isProxy of ref1(RefImpl) {{ isProxy(ref1) }}</div>
    <div>isProxy of reactive1 {{ isProxy(reactive1) }}</div>
    <div>isProxy of readonly1 {{ isProxy(readonly1) }}</div>

    <h3>3.3 isReactvie</h3>
    <div>isReactvie of reactive1 {{ isReactive(reactive1) }}</div>

    <h3>3.4 isReadonly</h3>
    <div>isReadonly of readonly1 {{ isReadonly(readonly1) }}</div>

    <h3>3.5 toRaw</h3>
    toRaw函数可以返回reactive或readonly代理对象的原始对象。
    <div>toRaw(reactive1) {{ toRaw(reactive1) }}</div>
    <div>toRaw(readonly1) {{ toRaw(readonly1) }}</div>
  </div>

  <h3>3.6 shallowReactive</h3>
  <div>isReactvie of shallowReactive1 {{ isReactive(shallowReactive1) }}</div>
  <div>
    isReactvie of shallowReactive1.nested
    {{ isReactive(shallowReactive1.nested) }}
  </div>

  <h3>3.7 shallowReadonly</h3>
  <div>isReadonly of shallowReadonly1 {{ isReadonly(shallowReadonly1) }}</div>
  <div>
    isReadonly of shallowReadonly1.nested
    {{ isReadonly(shallowReadonly1.nested) }}
  </div>

  <h2>4. 响应式工具 ref</h2>
  <h3>1. toRefs, toRef</h3>
  <ToRefsAPI />
  <h3>2. isRef</h3>
  <div>isRef of ref('a') {{ isRef(ref('a')) }}</div>
  <h3>3. unRef</h3>
  <div>unRef of ref('a') {{ unref(ref('a')) }}</div>
  <h3>4. customRef</h3>
  <CustomRefAPI />
  <h3>5. shallowRef</h3>
  <div>shallowRef1.name: {{ shallowRef1.name }}</div>
  <button @click="changeShallowRef1Name">修改shallowRef1.name</button>
  <h3>6. triggerRef</h3>
  <div>shallowRef1.name: {{ shallowRef1.name }}</div>
  <button @click="changeShallowRef1NameWithTriggerRef">
    使用triggerRef，修改shallowRef1.name
  </button>

  <h2>5. computed计算属性</h2>
  <ComputedAPI />

  <h2>6. watchEffect监听</h2>
  <p>
    watchEffect函数用于自动收集响应式数据的依赖; <br />
    watch函数需要手动指定监听的数据源
  </p>
  <h3>1. watchEffect基本使用、停止监听</h3>
  <WatchEffectAPI />
  <h3>2. watchEffect清除副作用</h3>
  <WatchEffectAPIClear />
  <h3>3. watchEffect的执行时机 (flush)</h3>
  <WatchEffectAPIFlush />

  <h2>7. watch监听</h2>
  <h3>7.1 监听单个数据源</h3>
  <WatchAPI />
  <h3>7.2 监听多个数据源</h3>
  <WatchAPIMult />
  <h3>7.3 监听响应式对象</h3>
  <WatchAPIDeep />

  <h2>8. 组件生命周期</h2>
  <LifeCycle v-if="showLifeCycleCpm" />
  <button @click="showLifeCycleCpm = !showLifeCycleCpm">显示/隐藏</button>

  <h2>9.Provide/Inject 依赖注入</h2>
  <Provide_Inject />

  <h2>10. Composition API的实战</h2>
  <h3>10.1 使用Options API实现计数器</h3>
  <OptionsAPIExample />
  <h3>10.2 使用Compotison API实现计数器</h3>
  <CompositionAPIExample />
  <h3>10.3 Compostion API计算器 代码逻辑的封装和复用</h3>
  <CompositionAPIExampleMixin />

  <h2>11. &ltscript setup&gt 语法</h2>
  <ScriptSetupExample
    ref="defineExposeAPIRef"
    message="App传递过来的message"
    @increment="getCounter"
  />
</template>

<script>
import {
  ref,
  readonly,
  reactive,
  isProxy,
  isReactive,
  isReadonly,
  toRaw,
  shallowReactive,
  shallowReadonly,
  isRef,
  unref,
  shallowRef,
  triggerRef,
  watchEffect,
} from 'vue'
import SetupProps from './1_SetupProps'
import SetupReturn from './2_SetupReturn'
import ReactiveAPI from './3_ReactiveAPI'
import refAPI from './4_refAPI'
import ReadonlyAPI from './5_ReadonlyAPI'
import ToRefsAPI from './6_ToRefsAPI'
import CustomRefAPI from './7_CustomRefAPI'
import ComputedAPI from './8_ComputedAPI'
import WatchEffectAPI from './9_WatchEffectAPI'
import WatchEffectAPIClear from './10_WatchEffectAPIClear'
import WatchEffectAPIFlush from './11_WatchEffectAPIFlush'
import WatchAPI from './12_WatchAPI'
import WatchAPIMult from './13_WatchAPIMult'
import WatchAPIDeep from './14_WatchAPIDeep'
import LifeCycle from './15_LifeCycle'
import Provide_Inject from './16_Provide_Inject'
import OptionsAPIExample from './18_OptionsAPIExample'
import CompositionAPIExample from './19_CompositionAPIExample'
import CompositionAPIExampleMixin from './20_CompositionAPIExampleMixin'
import ScriptSetupExample from './21_ScriptSetupExample'

export default {
  name: 'App',
  components: {
    SetupProps,
    SetupReturn,
    ReactiveAPI,
    refAPI,
    ReadonlyAPI,
    ToRefsAPI,
    CustomRefAPI,
    ComputedAPI,
    WatchEffectAPI,
    WatchEffectAPIClear,
    WatchEffectAPIFlush,
    WatchAPI,
    WatchAPIMult,
    WatchAPIDeep,
    LifeCycle,
    Provide_Inject,
    OptionsAPIExample,
    CompositionAPIExample,
    CompositionAPIExampleMixin,
    ScriptSetupExample,
  },
  setup() {
    const showLifeCycleCpm = ref(true)
    const ref1 = ref('a')
    const reactive1 = reactive({ name: 'why' })
    const readonly1 = readonly(reactive1)
    const shallowReactive1 = shallowReactive({
      foo: 1,
      nested: {
        bar: 2,
      },
    })
    const shallowReadonly1 = shallowReadonly({
      foo: 1,
      nested: {
        bar: 2,
      },
    })
    const shallowRef1 = shallowRef({
      name: 'why',
    })
    const changeShallowRef1Name = () => {
      shallowRef1.value.name = 'abc'

      console.log(shallowRef1.value)
    }

    const changeShallowRef1NameWithTriggerRef = () => {
      shallowRef1.value.name = 'test'
      // 通过手动触发，实现响应式
      triggerRef(shallowRef1)
      console.log(shallowRef1.value)
    }

    const getCounter = (number) => {
      console.log('App组件拿到子组件传递过来的number:', number)
    }

    // defineExpose相关示例代码
    const defineExposeAPIRef = ref(null)
    watchEffect(
      () => {
        console.log('defineExposeAPIRef:', defineExposeAPIRef.value) // 组件实例
        console.log(defineExposeAPIRef.value.age)
        console.log(defineExposeAPIRef.value.name)
        defineExposeAPIRef.value.showMessage()
      },
      {
        flush: 'post',
      }
    )

    return {
      showLifeCycleCpm,
      ref1,
      reactive1,
      readonly1,
      shallowReactive1,
      shallowReadonly1,
      shallowRef1,
      changeShallowRef1Name,
      changeShallowRef1NameWithTriggerRef,
      getCounter,
      defineExposeAPIRef,
      // ---
      isProxy,
      isReactive,
      isReadonly,
      toRaw,
      shallowReactive,
      shallowReadonly,
      ref,
      isRef,
      unref,
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

h2,
h3 {
  text-decoration: underline;
  color: orange;
}

.gray-border {
  border: 1px solid gray;
}
</style>
