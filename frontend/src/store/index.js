import Vue from 'vue'
import Vuex from 'vuex'
import auth from "./auth";
import site from "./site";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
        auth, site,
    }
})
