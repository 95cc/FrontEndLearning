import axios from 'axios'

// 1. 请求拦截器
axios.interceptors.request.use(
  // fn1: 请求发送成功会执行的函数
  (config) => {
    console.log('请求成功的拦截')
    if (config.headers) {
      config.headers['accessToken'] = 'aabbccdd'
    }
    return config
  },
  // fn2: 请求发送失败会指向的函数
  (error) => {
    console.log('请求发送错误')
    return error
  }
)

// 2. 响应拦截器
axios.interceptors.response.use(
  (res) => {
    console.log('响应成功的拦截', res)
    return res
  },
  (err) => {
    console.log('服务器相应失败', err)
    return err
  }
)

axios
  .post('http://httpbin.org/post', {
    id: 100400,
  })
  .then((res) => {
    console.log(res.data)
  })
