import ApiService from '@/services/apiService'

export const state = () => ({
    argonauts: []
})

export const mutations = {
    SET_ARGONAUTS(state, argonauts) {
        state.argonauts = argonauts
    },
    ADD_ARGONAUT(state, argonaut) {
        const argonautsList = state.argonauts
        argonautsList.push(argonaut)
        state.argonauts = argonautsList
    }
}

export const actions = {
    fetchArgonauts({ commit }) {
        return ApiService.getAll().then((response) => {
            commit('SET_ARGONAUTS', response.data)
        })
    },

    addArgonaut({ commit }, name) {
        return ApiService.addOne(name).then((response) => {
            commit('ADD_ARGONAUT', response.data.result)
        })
    }
}