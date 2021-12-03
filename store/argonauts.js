import ApiService from '@/services/apiService'

export const state = () => ({
    argonauts: []
})

export const mutations = {
    SET_ARGONAUTS(state, argonauts) {
        state.argonauts = argonauts
    }
}

export const actions = {
    fetchArgonauts({ commit }) {
        return ApiService.getAll().then((response) => {
            commit('SET_ARGONAUTS', response.data)
        })
    }
}