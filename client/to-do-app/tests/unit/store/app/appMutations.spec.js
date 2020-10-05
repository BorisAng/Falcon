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
})
