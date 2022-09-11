import requests from '../request'
export default {
    submitLogin(userInfo) {
        return requests({
            url: `/educenter/member/login`,
            method: 'post',
            data: userInfo
        })
    },

    getLoginUserInfo() {
        return requests({
            url: `/educenter/member/getUserInfo`,
            method: 'get'
        })
    },
}