import useLoginStore from '@/store/login/login'

function usePermissions(permissionID: string) {
	const loginStore = useLoginStore()
	const { permissions } = loginStore

	// 为调试方便，暂时都返回true
	return true
	// return !!permissions.find((item) => item.includes(permissionID))
}

export default usePermissions
