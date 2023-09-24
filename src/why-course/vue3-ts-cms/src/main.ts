import 'normalize.css'
import './assets/css/index.less'

import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import pinia from './store'

const app = createApp(App)
// 路由管理
app.use(router)
// 状态管理
app.use(pinia)

app.mount('#app')
