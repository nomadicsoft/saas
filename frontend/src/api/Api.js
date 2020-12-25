export default {

    /** Auth **/
    async forgotPassword(email) {
        return window.axios.post('/api/forgot-password', {email})
    },
    async resetPassword(params) {
        return window.axios.post('/api/reset-password', params)
    }

}
