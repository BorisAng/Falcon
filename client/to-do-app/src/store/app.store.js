
export default {
  namespaced: true,
  state: {
    selectedTask: {}
  },
  mutations: {
    setSelectedTask (state, payload) {
      state.selectedTask = payload
    }
  },
  actions: {
    updateSelectedTask (context, payload) {
      context.commit('setSelectedTask', payload)
    }
  }
}
