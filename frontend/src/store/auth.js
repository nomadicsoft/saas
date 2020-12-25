const state = {
    token: null,
    user: {},
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
    setUser: async (state, user) => {
        return new Promise(() => {
            state.user = user
            localStorage.setItem('user', JSON.stringify(user))
        })
    },
    clearUserData: async () => {
        return new Promise(resolve => {
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            resolve('ok')
        })
    },

};

const actions = {
    login: async ({ commit }, params) => {
        const {email, password } = params
        return new Promise((resolve, reject) => {
            window.axios.post('/api/login', {email, password}).then(async res => {
                console.log(res.data.token)
                await commit('setToken', res.data.token)
                await commit('setUser', res.data.user)
                resolve(res.data.user)
            }).catch(e => {
                reject(e)
            })
        })
    },
    getAuthUser({ commit }) {
        return new Promise((resolve, reject) => {
                window.axios.get('/api/users/auth').then(async res => {
                    await commit('setUser', res.data)
                    resolve(res.data)
                }).catch(e => {
                    reject(e)
                })
        })
    },
    setUser: async ({ commit },params) => {
        await commit('setToken', params.token)
        await commit('setUser',  params.user)
        return  params.user
    },
    signUp: async ({ commit }, params) => {
        return new Promise((resolve, reject) => {
            window.axios.post('/api/sign-up', params).then(async res => {
                await commit('setToken', res.data.token)
                await commit('setUser', res.data.user)
                resolve(res.data.user)
            }).catch(e => {
                reject(e)
            })
        })
    },
    logout: async ({ commit }, ) => {
        return await commit('clearUserData')
    },
};

export default {
    state, getters, mutations, actions
}
