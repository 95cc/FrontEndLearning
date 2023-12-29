<template>
  <div>
    <!-- Vue Router -->
    <div>
      <router-link to="/home">首页</router-link>
      <router-link class="tab" to="/about">关于</router-link>
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

    <!-- Vuex -->
    <div>当前计数: {{ counter }}</div>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>

    <!-- Element Plus -->
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button @click="showMsg">使用Elmessage</el-button>

    <!-- Echarts -->
    <EchartDemo />
    <base-echart :options="options"></base-echart>
    <base-echart :options="pieOptions"></base-echart>
    <base-echart :options="lineOptions"></base-echart>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
// 手动导入 ElButton 组件
import { ElButton } from 'element-plus'
// 当使用了unplugin-element-plus插件，并且只使用组件的API时，我们还需手动导入样式
import 'element-plus/es/components/message/style/css'
import { ElMessage } from 'element-plus'
import type { EChartsOption } from 'echarts'
// --- UI
import EchartDemo from './base-ui/echart-demo.vue'
import BaseEchart from './base-ui/echart'
// ---
import type { IRootState } from './store'

export default defineComponent({
  name: 'App',
  components: {
    ElButton: ElButton, // 局部注册组件,
    EchartDemo,
    BaseEchart,
  },
  computed: {
    counter: () => {},
  },
  setup() {
    const store = useStore<IRootState>()
    const counter = computed(() => {
      return store.state.counter
    })
    const increment = () => store.commit('increment')
    const decrement = () => store.commit('decrement')
    const showMsg = () => {
      ElMessage.success('成功')
    }

    // Echarts的bar配置选项
    const options = computed<EChartsOption>(() => {
      return {
        title: {
          text: 'ECharts 入门示例',
        },
        tooltip: {},
        legend: {
          data: ['销量'],
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      }
    })

    // Echarts的pie配置选项
    const pieOptions = computed<EChartsOption>(() => {
      return {
        tooltip: {
          trigger: 'item',
        },
        legend: {
          top: '5%',
          left: 'center',
        },
        series: [
          {
            name: 'Access From',
            type: 'pie', // 选择图表类型为：饼图
            radius: ['40%', '70%'], // 内半径，外半径
            label: {
              show: false, // 默认label隐藏
              position: 'center',
            },
            emphasis: {
              label: {
                // 高亮时label显示
                show: true,
                fontSize: '40',
                fontWeight: 'bold',
              },
            },
            labelLine: { show: false },
            data: [
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
              { value: 484, name: 'Union Ads' },
              { value: 300, name: 'Video Ads' },
            ],
          },
        ],
      }
    })

    // Echarts的line配置选项
    const lineOptions = computed<EChartsOption>(() => {
      return {
        title: {
          text: '折线图-案例',
        },
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          data: ['邮件', '广告'],
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
        },
        xAxis: {
          type: 'category',
          data: [
            '星期一',
            '星期二',
            '星期三',
            '星期四',
            '星期五',
            '星期六',
            '星期日',
          ],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            name: '邮件',
            type: 'line',
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: '广告',
            type: 'line',
            data: ['220', '182', '191', '234', '290', '330', '310'],
          },
        ],
      }
    })

    return {
      counter,
      increment,
      decrement,
      showMsg,
      options,
      pieOptions,
      lineOptions,
    }
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
