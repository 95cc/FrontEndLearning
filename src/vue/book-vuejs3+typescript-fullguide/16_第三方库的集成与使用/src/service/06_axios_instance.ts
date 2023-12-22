import axios from 'axios'

const API_POST = '/post'

const instance = axios.create({
  baseURL: 'http://httpbin.org',
  timeout: 10000,
})

instance
  .post(
    API_POST,
    {
      id: 100500,
    },
    {
      timeout: 5000,
      headers: {
        'Content-Type': 'application/json',
        accessToken: 'aabbccdd',
      },
    }
  )
  .then((res) => {
    console.log(res.data)
  })
