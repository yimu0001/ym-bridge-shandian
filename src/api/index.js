/*
 * @Author: your name
 * @Date: 2020-10-26 10:52:00
 * @LastEditTime: 2020-10-26 11:05:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ym-bridge-shandian\src\api\index.js
 */
import apiReuest from './api-request.js';
apiReuest.install = function(Vue) {
    Vue.component(apiReuest.name, apiReuest);
};
export default apiReuest;