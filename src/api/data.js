/*
 * @Author: your name
 * @Date: 2020-10-26 11:16:34
 * @LastEditTime: 2020-10-26 11:42:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ym-bridge-shandian\src\api\data.js
 */
import axios from './api-request'

export const getTopices = (baseUrl, content) => {
  return axios.request({
    url: baseUrl+'/baiduNlp/handle',
    method: 'post',
    data: {
      content
    }
  })
}