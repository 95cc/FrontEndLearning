<script lang="ts" setup>
import { computed } from 'vue'
// ---
import PageCommonSearch from '@/views/Main/components/PageCommonSearch.vue'
import PageCommonContent from '@/views/Main/components/PageCommonContent.vue'
import PageCommonEditModal from '@/views/Main/components/PageCommonEditModal.vue'
import searchConfig from './config/search.config'
import contentConfig from './config/content.config'
import modalConfig from './config/modal.config'
import usePageContent from '@/hooks/usePageContent'
import usePageModal from '@/hooks/usePageModal'
import useMainStore from '@/store/main/main'

// 对modalConfig进行操作
const modalConfigRef = computed(() => {
	const mainStore = useMainStore()
	const departments = mainStore.entireDepartments.map((item) => {
		return { label: item.name, value: item.id }
	})
	modalConfig.formItems.forEach((item) => {
		if (item.prop === 'parentId') {
			item.options.push(...departments)
		}
	})

	return modalConfig
})

// setup相同的逻辑的抽取: hooks
// 点击search, content的操作
const { contentRef, handleQueryClick, handleResetClick } = usePageContent()

// 点击content, modal的操作
const { modalRef, handleNewClick, handleEditClick } = usePageModal()
</script>

<template>
	<div class="wrapper-root">
		<PageCommonSearch
			:search-config="searchConfig"
			@query-click="handleQueryClick"
			@reset-click="handleResetClick"
		/>

		<PageCommonContent
			ref="contentRef"
			:content-config="contentConfig"
			@edit-click="handleEditClick"
			@new-click="handleNewClick"
		/>

		<PageCommonEditModal ref="modalRef" :modal-config="modalConfigRef" />
	</div>
</template>

<style lang="less" scoped>
.wrapper-root {
}
</style>
