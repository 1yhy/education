import requests from "../request";
export default {
    sendCode(phone) {
        return requests({
            url: `/edumsm/msm/send/${phone}`,
            method: 'get'
        })
    },

    registerMember(formItem) {
        return requests({
            url: `/educenter/member/register`,
            method: 'post',
            data: formItem
        })
    }
}