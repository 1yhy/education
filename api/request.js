import axios from 'axios'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import cookie from 'js-cookie'
import { Message, MessageBox } from 'element-ui'

const requests = axios.create({
    baseURL: "http://localhost:8222",
    timeout: 5000
})

requests.interceptors.request.use((config) => {
    nprogress.start()
    if (cookie.get('guli_token')) {
        config.headers['token'] = cookie.get('guli_token')
    }
    return config
})

requests.interceptors.response.use((res) => {
    if (res.data.code == 28004) {
        console.log("response.data.resultCode是28004")
            // 返回 错误代码-1 清除ticket信息并跳转到登录页面
            //debugger
        window.location.href = "/login"
        return
    } else {
        if (res.data.code !== 200) {
            //25000：订单支付中，不做任何提示
            if (response.data.code != 25000) {
                Message({
                    message: res.data.message || 'error',
                    type: 'error',
                    duration: 5 * 1000
                })
            }
        } else {
            nprogress.done()
            return res.data;
        }
    }
}, (error) => {
    return Promise.reject(new Error('false'))
})

export default requests