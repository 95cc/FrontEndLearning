import { defineStore } from 'pinia'
// ---
import type { IAccount } from '@/types'
import { localCache } from '@/utils/cache'
import router from '@/router'
import GlobalContants from '@/global/GlobalContants'
import { accountLoginRequest, getUserInfoById, getUserMenusByRoleId } from '@/service/other/login'
import useMainStore from '@/store/main/main'
import { mapMenusToRoutes } from '@/utils/MapMenus'

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

			// 本地缓存
			localCache.setCache('userInfo', userInfo)
			localCache.setCache('userMenus', userMenus)

			const routes = mapMenusToRoutes(userMenus)
			routes.forEach((route) => router.addRoute('main', route))

			router.push('/main')
		},
		loadLocalCacheAction() {
			// 1.用户进行刷新默认加载数据
			const token = localCache.getCache(GlobalContants.LOGIN_TOKEN)
			const userInfo = localCache.getCache('userInfo')
			const userMenus = localCache.getCache('userMenus')

			if (token && userInfo && userMenus) {
				this.token = token
				this.userInfo = userInfo
				this.userMenus = userMenus

				// 1..请求所有roles/departments数据
				const mainStore = useMainStore()
				mainStore.fetchEntireDataAction()

				// // 2.获取按钮的权限
				// const permissions = mapMenusToPermissions(userMenus)
				// this.permissions = permissions

				// // 3.动态添加路由
				const routes = mapMenusToRoutes(userMenus)
				routes.forEach((route) => router.addRoute('main', route))
			}
		}
	}
})

export default useLoginStore
