import { createRouter, createWebHashHistory } from 'vue-router'
// 纯类型的导入，即从vue-router包的vue-router.d.ts文件中导入
import type { RouteRecordRaw, Router } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: () => import('../pages/Home.vue'),
  },
  {
    path: '/about',
    component: () => import('../pages/About.vue'),
  },
]

const router: Router = createRouter({
  routes,
  history: createWebHashHistory(),
})

export default router
