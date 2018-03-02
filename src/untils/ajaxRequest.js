import axios from 'axios'
import serverpath from './serverPathConfig.js'
import { Loading,MessageBox  } from 'element-ui';

//实例化loading
const loadingConfig = {
    lock: true,
    text: '页面加载中...',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)'
}

//创建axios实例
let instance = axios.create({
    baseURL: serverpath,
    timeout: 30 * 1000,
    cache: false,
    headers: {}
})

//发起请求前拦截
instance.interceptors.request.use(function (config) {
    Loading.service(loadingConfig)
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
})

//发起请求后拦截
instance.interceptors.response.use(function (response) {
    Loading.service(loadingConfig).close()
    return response;
}, function (error) {
    MessageBox.alert('服务器加载出错啦，请稍后再试',{
        center:true
    }).then(()=>{
        Loading.service(loadingConfig).close()
    })

    // Do something with response error
    return Promise.reject(error);
})

export default instance
