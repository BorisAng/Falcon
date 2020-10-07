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

  test('updateTaskTitle commits setTaskTitle with selected task title', async () => {
    const context = {
      commit: jest.fn()
    }

    const title = 'Test Title'

    await app.actions.updateTaskTitle(context, title)
    expect(context.commit).toHaveBeenCalledWith('setTaskTitle', title)
  })

  test('updateTaskDescription commits setTaskTitleDescription with selected task description', async () => {
    const context = {
      commit: jest.fn()
    }

    const description = 'Test Description'

    await app.actions.updateTaskDescription(context, description)
    expect(context.commit).toHaveBeenCalledWith('setTaskDescription', description)
  })
})
