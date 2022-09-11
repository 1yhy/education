import requests from "../request";
export default {
    getBannerlist() {
        return requests({
            // url: '/eduservice/indexfront/index',
            url: '/educms/bannerfront/getAllBanner',
            method: 'get'
        })
    }
}