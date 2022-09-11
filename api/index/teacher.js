import requests from '../request'
export default {
    getTeacherList(page, limit) {
        return requests({
            url: `/eduservice/teacherfront/getTeacherFrontList/${page}/${limit}`,
            method: 'post'
        })
    },

    getTeacherInfo(id) {
        return requests({
            url: `/eduservice/teacherfront/getTeacherFrontInfo/${id}`,
            method: 'get'
        })
    },
}