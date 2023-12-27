import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

interface HYRequestConfig extends AxiosRequestConfig {}

class HYRequestWithInterceptor {
  instance: AxiosInstance

  constructor(config: HYRequestConfig) {
    // 创建axios实例
    this.instance = axios.create(config)

    // 为实例添加全局拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('全局拦截器: 请求成功拦截')
        return config
      },
      (err) => {
        console.log('全局拦截器: 请求失败拦截')
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        console.log('全局拦截器: 响应成功拦截')
        return res.data
      },
      (err) => {
        console.log('全局拦截器: 响应失败拦截')
        return err
      }
    )
  }

  request<T>(config: HYRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
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
}

export default HYRequestWithInterceptor
