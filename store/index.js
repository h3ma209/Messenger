

export const state = () => ({
    username: '',
    description: '',
})

export const getters = {
    getUsername(state) {
        return state.username
    },
    getDescription(state) {
        return state.description
    }
}

export const mutations = {
    setUsername(state, name) {
        state.username = name
    },
    setDescription(state, desc) {
        state.description = desc
    }
}

export const actions = {
}