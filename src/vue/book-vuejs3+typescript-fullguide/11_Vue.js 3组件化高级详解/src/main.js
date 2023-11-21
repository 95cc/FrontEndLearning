import { createApp } from 'vue'
import App from './App.vue'
// ---
import registerDirectives from './03_自定义指令/directives/index'
import pluginsObject from './05_插件开发/1_plugins_object'
import pluginsFunction from './05_插件开发/2_plugins_function'

const app = createApp(App)

// 自定义全局指令
app.directive('focus', {
  mounted(el, bindings) {
    console.log('global directive: focus mounted')
    el.focus()
  },
})
// 注册指令
registerDirectives(app)
// 注册插件
app.use(pluginsObject)
app.use(pluginsFunction)

app.mount('#app')
