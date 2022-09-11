import requests from "../request";
export default {
    getIndexData() {
        return requests({
            url: '/eduservice/indexfront/index',
            method: 'get'
        })
    }
}