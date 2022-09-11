import requests from '../request'
export default {
    getCourseList(page, limit, searchObj) {
        return requests({
            url: `/eduservice/coursefront/getFrontCourseList/${page}/${limit}`,
            method: 'post',
            data: searchObj
        })
    },

    getAllSubject() {
        return requests({
            url: '/eduservice/subject/getAllSubject',
            method: 'get'
        })
    },

    getCourseInfo(id) {
        return requests({
            url: `/eduservice/coursefront/getFrontCourseInfo/${id}`,
            method: 'get'
        })
    }


}