<script lang="ts">
import { ref, onMounted, defineComponent } from 'vue'
import * as echarts from 'echarts'
import type { ECharts, EChartsOption } from 'echarts'

export default defineComponent({
  name: 'EchartDemo',
  setup() {
    const echartDivRef = ref<HTMLElement>()

    onMounted(() => {
      /*
       * 设置主题颜色和渲染模式:
       * 主题颜色: Echarts默认内置了两个主题颜色 -- light和dark, 也可以加载其他主题
       * 渲染模式: Echarts提供了两种渲染模式 -- Canvas 和 SVG
       */
      const echartInstance: ECharts = echarts.init(
        echartDivRef.value as HTMLElement,
        'dark',
        {
          renderer: 'canvas',
        }
      )

      // Echarts配置项手册: https://echarts.apache.org/zh/option.html#title
      const options: EChartsOption = {
        title: {
          text: 'Echarts 入门示例',
        },
        tooltip: {},
        legend: {
          data: ['销量'],
        },
        xAxis: {
          type: 'category',
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

      echartInstance.setOption(options)
    })

    return {
      echartDivRef,
    }
  },
})
</script>

<template>
  <div class="base-echart">
    <div
      ref="echartDivRef"
      :style="{
        width: '100%',
        height: '360px',
      }"
    ></div>
  </div>
</template>
