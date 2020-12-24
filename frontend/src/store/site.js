const state = {
    snackbar: {},
};

const getters = {

};

const mutations = {
    hideSnackBar: (state) => {
        state.snackbar = {...state.snackbar, text: '', show: false}
    },
    showSnackBar: (state, snackbar) => {
        state.snackbar = {...snackbar, show: true}
    },
};

const actions = {

};

export default {
    state, getters, mutations, actions
}
