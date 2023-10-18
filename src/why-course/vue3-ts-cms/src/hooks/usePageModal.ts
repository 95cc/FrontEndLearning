import { ref } from 'vue'
import type PageCommonEditModal from '@/views/Main/components/PageCommonEditModal.vue'

type CallbackFnType = (data?: any) => void

function usePageModal(newCallback?: CallbackFnType, editCallback?: CallbackFnType) {
	const modalRef = ref<InstanceType<typeof PageCommonEditModal>>()
	function handleNewClick() {
		modalRef.value?.setModalVisible()
		if (newCallback) newCallback()
	}
	function handleEditClick(itemData: any) {
		// 1.让modal显示出来
		modalRef.value?.setModalVisible(false, itemData)
		// 2.编辑的回调
		if (editCallback) editCallback(itemData)
	}

	return { modalRef, handleNewClick, handleEditClick }
}

export default usePageModal
