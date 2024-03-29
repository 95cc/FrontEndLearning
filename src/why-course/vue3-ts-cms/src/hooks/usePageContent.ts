import { ref } from 'vue'
// ---
import type PageContent from '@/views/Main/components/PageCommonContent.vue'

function usePageContent() {
	const contentRef = ref<InstanceType<typeof PageContent>>()
	function handleQueryClick(queryInfo: any) {
		contentRef.value?.fetchPageListData(queryInfo)
	}
	function handleResetClick() {
		contentRef.value?.fetchPageListData()
	}

	return {
		contentRef,
		handleQueryClick,
		handleResetClick
	}
}

export default usePageContent
