import axios from 'axios'

const API_POST = 'http://httpbin.org/post'

function response(res: any) {
  console.log(res.data)
}

axios
  .post(API_POST, {
    id: 100400,
  })
  .then(response)

axios
  .request({
    method: 'post',
    url: API_POST,
    params: {
      id: 100400,
    },
  })
  .then(response)
