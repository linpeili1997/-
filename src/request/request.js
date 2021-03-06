import axios from 'axios'
import router from '@/router/'
import {Message, Loading} from "element-ui"
import qs from 'qs'

const service = axios.create({
    timeout: 5000, // 单位：毫秒
})
let count = 0
let loading

//请求前拦截
service.interceptors.request.use(
    config => {
        if (count === 0) {
            loading = Loading.service({
                target: '.content',
                background: 'rgba(255, 255, 255, 0.3)'
            })
        }
        count++;
        const token = localStorage.getItem('token')
        if (config.method === 'post' || config.method === 'put' || config.method === 'patch') {
            console.log(777,config);
            config.data = JSON.stringify(config.data);
        } else if (config.method === 'get' || config.method === 'delete') {
            if (token) {
                config.headers.common['Authorization'] = "Bearer " + token
            }
            config.params = config.params || {}
            config.url += '?' + qs.stringify(config.params)
            delete config.params
        }
        return config
    },
    error => {
        console.warn(error)
        return Promise.reject(error)
    }
)

//响应结果后拦截
service.interceptors.response.use(
    response => {
        count--
        if (count === 0) {
            loading.close()
        }
        
        if (response.data.success === true) {
            return response.data
        }

        if (response.data.success === false && response.data.msg === 'token 非法') {
            localStorage.removeItem('token')
            router.replace('/login')
        }
        return response.data
    },
    error => {
        count--
        if (count === 0) {
            loading.close()
        }
        Message({
            Message: '登陆失败' || '请求失败',
            type: 'error',    
            duration: 5 * 1000
        })
        return Promise.reject(error)
    }
)

//导出实例
export default service

