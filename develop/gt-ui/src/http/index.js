import axios from 'axios'
import Promise from 'promise'
import router from './../router/index'
import { Message } from "element-ui";

const Axios = axios.create({
 baseURL: "http://192.168.3.98:7072",
  // timeout: 10000,
  // responseType: "json",
  // xhrFields:{
  //   withCredentials: true, // 是否允许带cookie这些
  // }
  // withCredentials: true, // 是否允许带cookie这些
});

// 添加请求拦截器
Axios.interceptors.request.use(
  config => {
    var tocken = window.localStorage.getItem('tocken') || ''
    if (tocken) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.tocken = tocken
    }
    if (
      config.method === "post" ||
      config.method === "put" ||
      config.method === "delete"
    ) {
      // 序列化
      //config.data = qs.stringify(config.data);
    }
    return config
  },
  err => {
    Message({  //  饿了么的消息弹窗组件,类似toast
      showClose: true,
      message: err,
      type: "error.data.error.message"
    });
    return Promise.reject(err)
  })

// http response 拦截器 返回状态判断
Axios.interceptors.response.use(
  response => {
    if(response.data.code == 301 || response.data.code == 300){
      Message({
        showClose: true,
        message: response.data.msg,
        type: "error",
        onClose:()=>{
          'use strict'
          router.push({
            path: '/',
          })
        }
      });
    }
    return  response
  },
  error => {
    if (error.response) {

    }
    return Promise.reject(error.response.data)   // 返回接口返回的错误信息
  })
export default Axios
