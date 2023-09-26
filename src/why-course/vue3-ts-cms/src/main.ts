import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './store'
// 注册elementplus图标
import registerIcons from '@/global/register-icons'

// 样式相关
import 'normalize.css'
import './assets/css/index.less'
// element-plus样式引入
// 方式1(引入所有): import 'element-plus/dist/index.css'
// 方式2(引入单个): 如下
// 针对Elmessage和ElLoading等组件单独引入样式
// import 'element-plus/theme-chalk/el-message.css'
// import 'element-plus/theme-chalk/el-loading.css'
// 方式3(使用插件): vite-plugin-style-import(依赖 consola)
/*

*/

const app = createApp(App)
// 路由管理
app.use(router)
// 状态管理
app.use(pinia)
// element-plus图标
app.use(registerIcons)

app.mount('#app')
