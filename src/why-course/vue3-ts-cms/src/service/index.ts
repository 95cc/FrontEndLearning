import { AxiosHeaders } from 'axios'
// ---
import GlobalContants from '@/global/GlobalContants'
import { localCache } from '@/utils/cache'
import { BASE_URL, TIME_OUT } from './base/config'
import HYRequest from './base/request'

const hyRequest = new HYRequest({
	baseURL: BASE_URL,
	timeout: TIME_OUT,
	headers: new AxiosHeaders({})
})

hyRequest.instance.interceptors.request.use((config) => {
	// 每一个请求都自动携带token
	const token = localCache.getCache(GlobalContants.LOGIN_TOKEN)
	if (config.headers && token) {
		// 类型缩小
		config.headers.Authorization = 'Bearer ' + token
	}
	return config
})

export default hyRequest
