<script lang="ts" setup>
import { ref } from 'vue'
// ---
import UserSearch from './Components/UserSearch.vue'
import UserSearchContent from './Components/UserSearchContent.vue'
import UserEditModal from './Components/UserEditModal.vue'

const contentRef = ref<InstanceType<typeof UserSearchContent>>()
const modalRef = ref<InstanceType<typeof UserEditModal>>()

function handleQueryClick(formData: any) {
	contentRef.value?.fetchUserListData(formData)
}
function handleResetClick() {
	contentRef.value?.fetchUserListData()
}

// 对modal组件的操作
function handleNewClick() {
	modalRef.value?.setModalVisible()
}
function handleEditClick(itemData: any) {
	console.log(itemData)
	modalRef.value?.setModalVisible(false, itemData)
}
</script>

<template>
	<div class="user">
		<UserSearch @query-click="handleQueryClick" @reset-click="handleResetClick" />
		<UserSearchContent ref="contentRef" @new-click="handleNewClick" @edit-click="handleEditClick" />
		<UserEditModal ref="modalRef" />
	</div>
</template>

<style lang="less" scoped>
.user {
	border-radius: 8px;
	overflow: hidden;
}
</style>
