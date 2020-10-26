/*
 * @Author: your name
 * @Date: 2020-10-26 10:20:39
 * @LastEditTime: 2020-10-26 10:46:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ym-bridge-shandian\src\assets\api\bridge.js
 */
import axios from 'axios'
import Cookies from 'js-cookie';

function getHeaders() {
  let headers = {}
  let jwt = 'jwt-token'
  headers[jwt] = Cookies.get('jwt_token')? Cookies.get('jwt_token'): ''
}

class HttpRequest {
  constructor () {
    this.queue = {}
  }
  getInsideConfig () {
    const config = {
      headers: getHeaders()
    }
    return config
  }
  destroy (url) {
    delete this.queue[url]
  }
  interceptors (instance, url) {
    // 请求拦截
    instance.interceptors.request.use(config => {
      // 添加全局的loading...
      this.queue[url] = true
      return config
    }, error => {
      return Promise.reject(error)
    })
    // 响应拦截
    instance.interceptors.response.use(res => {
      this.destroy(url)
      const { data, status } = res
      return { data, status }
    }, error => {
      this.destroy(url)
      let errorInfo = error.response
      if (!errorInfo) {
        const { request: { statusText, status }, config } = JSON.parse(JSON.stringify(error))
        errorInfo = {
          statusText,
          status,
          request: { responseURL: config.url }
        }
      }
      addErrorLog(errorInfo)
      return Promise.reject(error)
    })
  }
  request (options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    options.baseURL = ''
    this.interceptors(instance, options.url)
    return instance(options)
  }
}
export default HttpRequest

