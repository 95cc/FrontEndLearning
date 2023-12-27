import { createApp } from 'vue'

// ---
import App from './App.vue'
import router from './router'
import store from './store/index'
// --- Element Plus
// import ElementPlus from 'element-plus' // 全局引入 Element Plus 组件库
// import 'element-plus/dist/index.css' // 全局引入 Element Plus组件库的样式
// --- axios
import './service/01_axios-get'
import './service/02_axios-post'
import './service/03_axios_config'
import './service/04_axios_all'
import './service/05_axios_interceptor'
import './service/06_axios_instance'
import './service/07_use_hyrequest.ts'

const app = createApp(App)

app.use(router)
app.use(store)
// app.use(ElementPlus) // 安装 Element Plus组件库

app.mount('#app')
