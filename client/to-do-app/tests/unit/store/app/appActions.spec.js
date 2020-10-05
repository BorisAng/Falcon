import app from '@/store/app.store'

describe('App actions tests', () => {
  test('updateSelectedTask commits setSelectedTask with selected task data', async () => {
    const context = {
      commit: jest.fn()
    }

    const selectedTask = {
      title: 'Test Title',
      description: 'Test Description'
    }

    await app.actions.updateSelectedTask(context, selectedTask)
    expect(context.commit).toHaveBeenCalledWith('setSelectedTask', selectedTask)
  })
})
