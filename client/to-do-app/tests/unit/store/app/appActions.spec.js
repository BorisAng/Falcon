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

  test('updateTaskDescription commits setTaskDescription with selected task description', async () => {
    const context = {
      commit: jest.fn()
    }

    const description = 'Test Description'

    await app.actions.updateTaskDescription(context, description)
    expect(context.commit).toHaveBeenCalledWith('setTaskDescription', description)
  })

  test('updateTaskCompleted commits setTaskCompleted with selected task completed', async () => {
    const context = {
      commit: jest.fn()
    }

    const completed = true

    await app.actions.updateTaskCompleted(context, completed)
    expect(context.commit).toHaveBeenCalledWith('setTaskCompleted', completed)
  })
})
