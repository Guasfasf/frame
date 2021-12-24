// credentials 在向服务器发送请求的时候会带上cookie
const HOST = 'http://localhost:3000'
export function get (url) {
  return fetch(HOST + url, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Accept': 'application/json'
    }
  }).then(res => res.json())
}
// url 后台地址  data 请求体
export function post (url, data) {
  console.log('data', data)
  return fetch(HOST + url, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'// 告诉客户端需要的数据类型
    },
    body: JSON.stringify(data)// 请求体格式
  }).then(res => res.json())
}
