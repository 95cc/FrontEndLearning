import { createPinia } from 'pinia'
import type { App } from 'vue'
// ---
import useLoginStore from './other/login'

const pinia = createPinia()

function registerStore(app: App<Element>) {
	// 1.use的pinia
	app.use(pinia)
}

export default registerStore
