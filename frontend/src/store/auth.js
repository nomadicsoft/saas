const state = {
    token: null,
};

const getters = {

};

const mutations = {
    setToken: async (state, token) => {
        return new Promise(() => {
            state.token = token
            localStorage.setItem('token', token)
            window.axios.defaults.headers.common.Authorization = `Bearer ${token}`
        })
    },
};

const actions = {
    login: async ({ commit }, params) => {
        const {email, password } = params
        return new Promise((resolve, reject) => {
            window.axios.post('/api/login', {email, password}).then(async res => {
                console.log(res.data)
                await commit('setToken', res.data)
                resolve('OK')
            }).catch(e => {
                reject(e)
            })
        })
    },
};

export default {
    state, getters, mutations, actions
}
