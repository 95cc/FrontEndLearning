import { createRouter, createWebHashHistory } from 'vue-router'
// ---
import { localCache } from '@/utils/cache'
import GlobalContants from '@/global/GlobalContants'
import { firstMenu } from '@/utils/MapMenus'

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: '/',
			redirect: '/main'
		},
		{
			name: 'main',
			path: '/main',
			component: () => import('../views/Main/Main.vue')
		},
		{
			path: '/login',
			component: () => import('../views/Login/Login.vue')
		},
		{
			path: '/:pathMatch(.*)',
			component: () => import('../views/NotFound/NotFound.vue')
		}
	]
})

// 导航守卫
router.beforeEach((to) => {
	const token = localCache.getCache(GlobalContants.LOGIN_TOKEN)

	if (to.path == '/main' && !token) {
		return '/login'
	}

	// 如果是进入到main
	if (to.path == '/main') {
		return firstMenu?.path
	}

	console.log('to', to, router.getRoutes())
})

export default router
