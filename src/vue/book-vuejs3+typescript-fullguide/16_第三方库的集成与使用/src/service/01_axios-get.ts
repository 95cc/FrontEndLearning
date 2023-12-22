import axios from 'axios'

const API_GET = 'http://httpbin.org/get'

// R: 响应结果res的类型
// T: 响应结果res.data的类型
// D: 请求提交data参数的类型
// get<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>;

axios.get(API_GET + '?id=100400').then((res) => {
  console.log(res.data)
})

axios
  .get(API_GET, {
    params: {
      id: 100400,
    },
  })
  .then((res) => {
    console.log(res.data)
  })

axios
  .request({
    method: 'get',
    url: API_GET,
    params: {
      id: 100400,
    },
  })
  .then((res) => {
    console.log(res.data)
  })

// 添加类型
interface IResponseData {
  args: any
  headers: any
  origin: string
  url: string
}

axios.get<IResponseData>(API_GET + '?id=100400').then((res) => {
  console.log(res.data)
})
