import { createApp } from 'vue'

// ---
import App from './App.vue'
import router from './router'
import store from './store/index'
// --- Element Plus
// import ElementPlus from 'element-plus' // 全局引入 Element Plus 组件库
// import 'element-plus/dist/index.css' // 全局引入 Element Plus组件库的样式

const app = createApp(App)

app.use(router)
app.use(store)
// app.use(ElementPlus) // 安装 Element Plus组件库

app.mount('#app')
