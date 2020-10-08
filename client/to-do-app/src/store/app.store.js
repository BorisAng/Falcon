
export default {
  namespaced: true,
  state: {
    selectedTask: {
      title: null,
      description: null,
      completed: null
    }
  },
  mutations: {
    setSelectedTask (state, payload) {
      state.selectedTask = payload
    },
    setTaskTitle (state, payload) {
      state.selectedTask.title = payload
    },
    setTaskDescription (state, payload) {
      state.selectedTask.description = payload
    },
    setTaskCompleted (state, payload) {
      state.selectedTask.completed = payload
    }
  },
  actions: {
    updateSelectedTask (context, payload) {
      context.commit('setSelectedTask', payload)
    },
    updateTaskTitle (context, payload) {
      context.commit('setTaskTitle', payload)
    },
    updateTaskDescription (context, payload) {
      context.commit('setTaskDescription', payload)
    },
    updateTaskCompleted (context, payload) {
      context.commit('setTaskCompleted', payload)
    }
  }
}
