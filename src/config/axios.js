/**
 * ajax config
 */
import store from '@/store'; //状态管理
import axios from 'axios';
import VARS from '@/config/vars';

//axios config
axios.defaults.baseURL = esConfig.api.es.url;
axios.defaults.timeout = 25000;//指定请求超时的毫秒数
axios.defaults.headers.post['Content-Type'] = 'application/json';

// axios.defaults.headers.language = "zh-CN";
// axios.defaults.withCredentials = true;//表示跨域请求时是否需要使用凭证
// Add a request interceptor
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    store.state.loading = true;
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  //loading
  store.state.loading = false;
  let res = response.data;
  if (res.code == "0000") {//增加表单记录 直接返回整个响应体
    return res.data;
  } else{
    return Promise.reject(res.result || VARS.code[res.code] || VARS.msg.error.api);
  }
}, function (error) {
  //loading
  store.state.loading = false;
  console.log('response error', error);
  return Promise.reject(error);
});
