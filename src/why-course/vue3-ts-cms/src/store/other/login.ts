import { defineStore } from 'pinia'
// ---
import type { IAccount } from '@/types'
import { localCache } from '@/utils/cache'
import router from '@/router'
import GlobalContants from '@/global/GlobalContants'
import { accountLoginRequest, getUserInfoById, getUserMenusByRoleId } from '@/service/other/login'

interface ILoginState {
	token: string
	userInfo: any
	userMenus: any
	permissions: string[]
}

const useLoginStore = defineStore('login', {
	state: (): ILoginState => ({
		token: '',
		userInfo: {},
		userMenus: [],
		permissions: []
	}),
	actions: {
		async loginAccountAction(account: IAccount) {
			// 获取id、token
			const loginResult = await accountLoginRequest(account)
			const id = loginResult.data.id
			this.token = loginResult.data.token
			localCache.setCache(GlobalContants.LOGIN_TOKEN, this.token)
			// 获取用户信息
			const userInfoResult = await getUserInfoById(id)
			const userInfo = userInfoResult.data
			this.userInfo = userInfo
			// 获取用户权限菜单
			const userMenuResult = await getUserMenusByRoleId(this.userInfo?.role?.id)
			const userMenus = userMenuResult.data
			this.userMenus = userMenus
			router.push('/main')
			console.log(userMenuResult)
		},
		loadLocalCacheAction() {}
	}
})

export default useLoginStore
