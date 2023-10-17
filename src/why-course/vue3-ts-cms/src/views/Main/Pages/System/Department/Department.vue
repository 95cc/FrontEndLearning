<script lang="ts" setup>
import { computed } from 'vue'
// ---
import PageCommonSearch from '@/views/Main/components/PageCommonSearch.vue'
import PageCommonContent from '@/views/Main/components/PageCommonContent.vue'
import searchConfig from './config/search.config'
import contentConfig from './config/content.config'
import usePageContent from '@/hooks/usePageContent'

// setup相同的逻辑的抽取: hooks
// 点击search, content的操作
const { contentRef, handleQueryClick, handleResetClick } = usePageContent()
</script>

<template>
	<div class="wrapper-root">
		<PageCommonSearch
			:search-config="searchConfig"
			@query-click="handleQueryClick"
			@reset-click="handleResetClick"
		/>
		<PageCommonContent ref="contentRef" :content-config="contentConfig" />
	</div>
</template>

<style lang="less" scoped>
.wrapper-root {
}
</style>
