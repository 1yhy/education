import requests from "../request"
const api_name = '/vod/video'
export default {
    getPlayAuth(vid) {
        return requests({
            url: `/eduvod/video/getPlayAuth/${vid}`,
            method: 'get'
        })
    }
}