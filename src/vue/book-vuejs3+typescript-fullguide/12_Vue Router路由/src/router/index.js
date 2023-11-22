import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from 'vue-router'
// ---
// import HomeVue from '@/pages/Home.vue'
import AboutVue from '@/pages/About.vue'

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/login',
    component: () => import('../pages/Login.vue'),
  },
  {
    path: '/home',
    // 路由懒加载 (import函数正好可以动态导入组件并返回一个Promise对象)
    // 分包魔法注释
    component: () =>
      import(/* webpackChunkName: 'home-chunk' */ '../pages/Home.vue'),
    // 在Home页面下注册二级路由
    children: [
      {
        path: '/',
        redirect: '/home/message',
      },
      {
        // 二级路由不支持 /message或/home/message，直接填message即可
        path: 'message',
        component: () => import('../pages/HomeMessage.vue'),
      },
      {
        path: 'shops',
        component: () => import('../pages/HomeShops.vue'),
      },
    ],
    // 指定该路由的名称为: home
    name: 'home',
    // 为该路由添加自定义数据
    meta: {
      name: 'coder',
      age: 18,
    },
  },
  {
    name: 'about',
    path: '/about',
    // 路由懒加载
    component: () =>
      import(/* webpackChunkName: 'about-chunk' */ '../pages/About.vue'),
  },
  {
    // 动态路径参数以冒号开始，例如， :username 代表动态路径参数
    path: '/user/:username/id/:id',
    component: () => import('../pages/User.vue'),
  },
  {
    // 使用通配符*来匹配任意路径，通配符路由应放在最后
    // path: '/:pathMatch(.*)',
    // 如果省略了最后的*，那么在解析或跳转时，参数中的/字符将被编码。
    // 如果打算直接使用未匹配的路径名称导航到该路径，那么这个*是必须的。
    path: '/:pathMatch(.*)*',
    component: () => import('../pages/NotFound.vue'),
  },
]

const router = createRouter({
  routes: routes,
  // hash路由: createWebHashHistory()
  // history路由: createWebHistory()
  // history: createWebHashHistory(),
  history: createWebHistory(),
})

// 🇨🇳🇨🇳🇨🇳 动态添加路由
// 商品分类页面的路由配置
const categoryRoute = {
  path: '/category',
  component: () => import('../pages/Category.vue'),
}
router.addRoute(categoryRoute)
// 为现有路由（home）增加二级路由
router.addRoute('home', {
  path: 'comment',
  component: () => import('../pages/HomeComment.vue'),
})

// 🇨🇳🇨🇳🇨🇳 动态路由补充 (删除动态路由)
// const remoteAboutRouteFn = router.addRoute({
//   path: '/about',
//   name: 'about',
//   component: () => import('../pages/About.vue'),
// })
// 3种删除路由的方式
// 1. 添加一个相同名字的路由，会覆盖之前同一名字的路由
// router.addRoute({
//   path: '/other',
//   name: 'about',
//   component: () => import('../pages/Other.vue'),
// })

// 2. 使用removeRoute方法，传入路由的名称
// router.removeRoute('about')

// 3. 调用router.addRoute返回的回调函数
// remoteAboutRouteFn()

// 🇨🇳🇨🇳🇨🇳 Vue Router的实例还提供很多常用的方法，如：
// router.hasRoute: 检查路由是否存在
// router.getRoutes: 获取一个包含所有路由记录的数组
console.log(router)
console.log(router.hasRoute('home'))
console.log(router.getRoutes())

// 🇨🇳🇨🇳🇨🇳 导航守卫三种实现方法：全局路由守卫、单个路由独享的守卫、组件内的守卫
router.beforeEach((to, form) => {
  /*
  返回值的作用：
    1. false: 取消当前导航
    2. undefined或不返回: 进行默认导航
    3. 字符串: 一个路由路径
    4. 对象: 如{path: '/login', query: {}, params: {}} 
   */
  console.log(to, form)

  if (to.path != '/login') {
    const token = window.sessionStorage.getItem('token')
    if (!token) {
      return '/login'
    }
  }
})

export default router
