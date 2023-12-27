import HYRequest from './request'
import HYRequestWithInterceptor from './request/hyrequest_interceptor_global'
import HYRequestWithInterceptorSingle from './request/hyrequest_interceptor_single'

let BASE_URL = 'http://httpbin.org'
const TIME_OUT = 10000

export const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
})

export const hyRequestWithInterceptor = new HYRequestWithInterceptor({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
})

export const hyRequestWithInterceptorSingle =
  new HYRequestWithInterceptorSingle({
    baseURL: BASE_URL,
    timeout: TIME_OUT,
  })

export default hyRequest
