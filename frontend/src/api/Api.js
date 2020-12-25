export default {

    /** Auth **/
    async forgotPassword(email) {
        return new Promise((resolve) => {
            window.axios.post('/api/forgot-password', {email}).then(response => resolve(response.data))
        })
    },
    async resetPassword(params) {
        return new Promise((resolve) => {
            window.axios.post('/api/reset-password', params).then(response => resolve(response.data))
        })
    }

}
