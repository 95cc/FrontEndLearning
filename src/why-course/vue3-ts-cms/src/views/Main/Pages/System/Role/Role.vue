<template>
	<div class="role">
		<PageCommonSearch
			:search-config="searchConfig"
			@query-click="handleQueryClick"
			@reset-click="handleResetClick"
		/>
		<PageCommonContent
			:content-config="contentConfig"
			ref="contentRef"
			@new-click="handleNewClick"
			@edit-click="handleEditClick"
		/>
		<PageCommonEditModal :modal-config="modalConfig" :other-info="otherInfo" ref="modalRef">
			<template #menulist>
				<el-tree
					ref="treeRef"
					:data="entireMenus"
					show-checkbox
					node-key="id"
					:props="{ children: 'children', label: 'name' }"
					@check="handleElTreeCheck"
				/>
			</template>
		</PageCommonEditModal>
	</div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { ref, nextTick } from 'vue'
import type { ElTree } from 'element-plus'
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
import { mapMenuListToIds } from '@/utils/MapMenus'

// 逻辑关系
const { contentRef, handleQueryClick, handleResetClick } = usePageContent()
const { modalRef, handleNewClick, handleEditClick } = usePageModal(newCallback, editCallback)

// 获取完整的菜单
const mainStore = useMainStore()
const { entireMenus } = storeToRefs(mainStore)
const otherInfo = ref({})
function handleElTreeCheck(data1: any, data2: any) {
	const menuList = [...data2.checkedKeys, ...data2.halfCheckedKeys]
	console.log(data2.checkedKeys)
	otherInfo.value = { menuList }
}

const treeRef = ref<InstanceType<typeof ElTree>>()
function newCallback() {
	nextTick(() => {
		treeRef.value?.setCheckedKeys([])
	})
}
function editCallback(itemData: any) {
	nextTick(() => {
		const menuIds = mapMenuListToIds(itemData.menuList)
		treeRef.value?.setCheckedKeys(menuIds)
	})
}
</script>

<style lang="less" scoped></style>
