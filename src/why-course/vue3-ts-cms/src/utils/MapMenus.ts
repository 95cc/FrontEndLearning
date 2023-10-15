import type { RouteRecordRaw } from 'vue-router'

export function loadLocalRoutes() {
	const localRoutes: RouteRecordRaw[] = []
	const files: Record<string, any> = import.meta.glob('../router/main/**/*.ts', { eager: true })

	for (const key in files) {
		const module = files[key]
		console.log('module.default', module.default)
		module.default.component()
		localRoutes.push(module.default)
	}

	console.log('localRoutes', localRoutes)

	return localRoutes
}

export let firstMenu: any = null
export function mapMenusToRoutes(userMenus: any[]) {
	const localRoutes = loadLocalRoutes()
	const routes: RouteRecordRaw[] = []

	for (const menu of userMenus) {
		for (const subMenu of menu.children) {
			const route = localRoutes.find((item) => item.path == subMenu.url)
			if (route) {
				// 组路由默认组内的第一个路由
				if (!routes.find((item) => item.path == menu.url)) {
					routes.push({
						path: menu.url,
						redirect: route.path
					})
				}

				routes.push(route)
			}

			if (!firstMenu && route) firstMenu = route
		}
	}
	return routes
}

export function mapPathToMenu(path: string, userMenus: any[]) {
	for (const menu of userMenus) {
		for (const submenu of menu.children) {
			if (submenu.url === path) {
				return submenu
			}
		}
	}
}

interface IBreadcrumbs {
	name: string
	path: string
}
export function mapPathToBreadcrumbs(path: string, userMenus: any[]) {
	// 1.定义面包屑
	const breadcrumbs: IBreadcrumbs[] = []

	// 2.遍历获取面包屑层级
	for (const menu of userMenus) {
		for (const submenu of menu.children) {
			if (submenu.url === path) {
				// 1.顶层菜单
				breadcrumbs.push({ name: menu.name, path: menu.url })
				// 2.匹配菜单
				breadcrumbs.push({ name: submenu.name, path: submenu.url })
			}
		}
	}
	return breadcrumbs
}
