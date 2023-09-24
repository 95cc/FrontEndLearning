import { createRouter, createWebHashHistory } from 'vue-router'

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

export default router
