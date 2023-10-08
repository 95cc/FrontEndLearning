import { createRouter, createWebHashHistory } from 'vue-router'
import { localCache } from '@/utils/cache'
import GlobalContants from '@/global/GlobalContants'

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: '/',
			redirect: '/main'
		},
		{
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
})

export default router
