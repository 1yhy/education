import requests from '../request'
export default {
    createOrder(courseId) {
        return requests({
            url: `/eduorder/order/createOrder/${courseId}`,
            method: 'post',
        })
    },

    getOrderInfo(id) {
        return requests({
            url: `/eduorder/order/getOrderInfo/${id}`,
            method: 'get'
        })
    },

    createNative(orderNo) {
        return requests({
            url: `/eduorder/paylog/createNative/${orderNo}`,
            method: 'get'
        })
    },

    getPayStatus(orderNo) {
        return requests({
            url: `/eduorder/paylog/payStatus/${orderNo}`,
            method: 'get'
        })
    }
}