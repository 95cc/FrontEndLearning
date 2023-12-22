import axios from 'axios'

/*
Request at 'http://httpbin/org/get?id=100400' from origin 'http://localhost:8080' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.
*/

/*
Access to XMLHttpRequest at 'http://httpbin/org/post' from origin 'http://localhost:8080' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.
*/

// axios
//   .all([
//     axios.get('http://httpbin/org/get', {
//       params: {
//         id: 100400,
//       },
//       headers: {
//         'Access-Control-Allow-Origin': '*',
//       },
//     }),
//     axios.post(
//       'http://httpbin/org/post',
//       {
//         id: 100400,
//       },
//       {
//         headers: {
//           'Access-Control-Allow-Origin': '*',
//         },
//       }
//     ),
//   ])
//   .then((res) => {
//     console.log(res[0].data)
//     console.log(res[1].data)
//   })
