import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

interface HYRequestConfig extends AxiosRequestConfig {}

class HYRequest {
  instance: AxiosInstance

  constructor(config: HYRequestConfig) {
    this.instance = axios.create(config)
  }

  request<T>(config: HYRequestConfig): Promise<AxiosResponse<T>> {
    return new Promise((resolve, reject) => {
      this.instance
        .request<T>(config)
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          reject(err)
          // why: return err
          return err
        })
    })
  }
}

export default HYRequest
