import axios from 'axios'
import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios'

interface HYRequestInterceptors<T = any> {
  // request: AxiosInterceptorManager<InternalAxiosRequestConfig>
  // response: AxiosInterceptorManager<AxiosResponse<T>>
  requestInterceptor: (
    config: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (
    res: AxiosResponse<T>
  ) => AxiosResponse<T> | Promise<AxiosResponse<T>>
  responseInterceptorCatch?: (error: any) => any
}

interface HYRequestConfigSingle<T = any> extends AxiosRequestConfig {
  custom_interceptors?: HYRequestInterceptors<T>
}

class HYRequestWithInterceptorSingle {
  instance: AxiosInstance
  interceptors?: HYRequestInterceptors

  constructor(config: HYRequestConfigSingle) {
    // 创建axios实例
    this.instance = axios.create(config)

    // 为实例添加全局拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('HYRequestWithInterceptorSingle 全局拦截器: 请求成功拦截')
        return config
      },
      (err) => {
        console.log('HYRequestWithInterceptorSingle 全局拦截器: 请求失败拦截')
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        console.log('HYRequestWithInterceptorSingle 全局拦截器: 响应成功拦截')
        return res.data
      },
      (err) => {
        console.log('HYRequestWithInterceptorSingle 全局拦截器: 响应失败拦截')
        return err
      }
    )
  }

  request<T>(config: HYRequestConfigSingle): Promise<T> {
    return new Promise((resolve, reject) => {
      this.instance.interceptors.request.use(
        config.custom_interceptors?.requestInterceptor,
        config.custom_interceptors?.requestInterceptorCatch
      )
      this.instance.interceptors.response.use(
        config.custom_interceptors?.responseInterceptor,
        config.custom_interceptors?.responseInterceptorCatch
      )

      this.instance
        .request<T, T>(config)
        // then在这里获取的res类型是T，而不是AxiosResponse<T>，因为在拦截器中修改了返回值
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          reject(err)
          return err
        })
    })
  }

  get<T>(config: HYRequestConfigSingle): Promise<T> {
    return this.request<T>({
      ...config,
      method: 'get',
    })
  }
  post<T>(config: HYRequestConfigSingle): Promise<T> {
    return this.request<T>({
      ...config,
      method: 'post',
    })
  }
  delete<T>(config: HYRequestConfigSingle): Promise<T> {
    return this.request<T>({
      ...config,
      method: 'delete',
    })
  }
  patch<T>(config: HYRequestConfigSingle): Promise<T> {
    return this.request<T>({
      ...config,
      method: 'patch',
    })
  }
}

export default HYRequestWithInterceptorSingle
