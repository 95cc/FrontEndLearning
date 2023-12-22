import axios from 'axios'

const API_POST = '/post'
axios.defaults.baseURL = 'http://httpbin.org'
axios.defaults.timeout = 10000

axios
  .post(
    API_POST,
    {
      id: 100400,
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
