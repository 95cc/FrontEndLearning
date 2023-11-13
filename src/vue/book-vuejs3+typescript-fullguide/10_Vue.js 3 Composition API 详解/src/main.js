import { createApp } from 'vue'
// import App from './App.vue'
import App from './1_Options_API代码的复用/App.vue'

const app = createApp(App)

app.mixin({
  created() {
    console.log('global mixin created')
  },
})

app.mount('#app')
