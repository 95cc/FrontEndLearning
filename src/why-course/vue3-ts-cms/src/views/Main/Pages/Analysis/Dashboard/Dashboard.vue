<script lang="ts" setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
// ---
import ChartCard from './components/ChartCard.vue'
import CountCard from './components/CountCard.vue'
import useAnalysisStore from '@/store/main/analysis/analysis'
import { PieEchart, LineEchart, RoseEchart, BarEchart, MapEchart } from './components/PageEcharts'

// 1.发起数据的请求
const analysisStore = useAnalysisStore()
analysisStore.fetchAnalysisDataAction()

// 2.从store获取数据
const { amountList, goodsCategoryCount, goodsCategorySale, goodsCategoryFavor, goodsAddressSale } =
	storeToRefs(analysisStore)

// 3.获取数据
const showGoodsCategoryCount = computed(() => {
	return goodsCategoryCount.value.map((item) => ({
		name: item.name,
		value: item.goodsCount
	}))
})
const showGoodsCategorySale = computed(() => {
	const labels = goodsCategorySale.value.map((item) => item.name)
	const values = goodsCategorySale.value.map((item) => item.goodsCount)
	return { labels, values }
})
const showGoodsCategoryFavor = computed(() => {
	const labels = goodsCategoryFavor.value.map((item) => item.name)
	const values = goodsCategoryFavor.value.map((item) => item.goodsFavor)
	return { labels, values }
})
const showGoodsAddressSale = computed(() => {
	return goodsAddressSale.value.map((item) => ({
		name: item.address,
		value: item.count
	}))
})
</script>

<template>
	<div class="dashboard">
		<!-- 1.顶部数字的数据展示 -->
		<el-row :gutter="10">
			<template v-for="item in amountList" :key="item.amount">
				<el-col :span="6" :xs="24" :sm="12" :md="8" :lg="6">
					<count-card v-bind="item" />
				</el-col>
			</template>
		</el-row>

		<!-- 2.中间部分的图表 -->
		<el-row :gutter="10">
			<el-col :span="7">
				<chart-card>
					<pie-echart :pie-data="showGoodsCategoryCount" />
				</chart-card>
			</el-col>
			<el-col :span="10">
				<chart-card>
					<map-echart :map-data="showGoodsAddressSale" />
				</chart-card>
			</el-col>
			<el-col :span="7">
				<chart-card>
					<rose-echart :rose-data="showGoodsCategoryCount" />
				</chart-card>
			</el-col>
		</el-row>

		<!-- 3.底部部分的图表 -->
		<el-row :gutter="10">
			<el-col :span="12">
				<chart-card>
					<line-echart v-bind="showGoodsCategorySale" />
				</chart-card>
			</el-col>
			<el-col :span="12">
				<chart-card>
					<bar-echart v-bind="showGoodsCategoryFavor" />
				</chart-card>
			</el-col>
		</el-row>
	</div>
</template>

<style lang="less" scoped>
.el-row {
	margin-bottom: 10px;
}
</style>
