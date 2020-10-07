import app from '@/store/app.store'

describe('App mutations tests', () => {
  test('setSelectedTask sets state.selectedTask to payload', () => {
    const payload = {
      title: 'Test Title',
      description: 'Test Description'
    }

    const state = { selectedTask: {} }

    app.mutations.setSelectedTask(state, payload)
    expect(state.selectedTask).toEqual(payload)
  })

  test('setTaskTitle sets state.selectedTask.title to payload', () => {
    const payload = 'Test Title'

    const state = { selectedTask: { title: '' } }

    app.mutations.setTaskTitle(state, payload)
    expect(state.selectedTask.title).toEqual(payload)
  })

  test('setTaskDescription sets state.selectedTask.description to payload', () => {
    const payload = 'Test Description'

    const state = { selectedTask: { description: '' } }

    app.mutations.setTaskDescription(state, payload)
    expect(state.selectedTask.description).toEqual(payload)
  })
})
