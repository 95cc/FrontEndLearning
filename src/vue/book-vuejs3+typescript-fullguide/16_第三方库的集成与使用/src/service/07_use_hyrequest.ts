import hyRequest from '.'
import { hyRequestWithInterceptor, hyRequestWithInterceptorSingle } from '.'

interface IResponseData {
  args: any
  headers: any
  origin: string
  url: string
}

hyRequest
  .request<IResponseData>({
    url: '/get',
    method: 'get',
  })
  .then((res) => {
    console.log(res.data)
  })

hyRequestWithInterceptor
  .request<IResponseData>({
    url: '/get',
    method: 'get',
  })
  .then((res) => {
    console.log(res)
  })

hyRequestWithInterceptorSingle
  .request<IResponseData>({
    url: '/get',
    method: 'get',
    custom_interceptors: {
      requestInterceptor(config) {
        console.log('单个实例-请求成功的拦截')
        config.headers.Authorization = `Bearer test`
        return config
      },
      requestInterceptorCatch(error) {
        console.log('单个实例-请求失败的拦截')
        console.log(error)
        return error
      },
      responseInterceptor(res) {
        console.log('单个实例-响应成功的拦截')
        return res
      },
      responseInterceptorCatch(error) {
        console.log('单个实例-响应失败的拦截')
        return error
      },
    },
  })
  .then((res) => {
    console.log('单个实例响应', res)
  })
