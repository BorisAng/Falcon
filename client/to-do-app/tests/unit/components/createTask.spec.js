import { createLocalVue, mount } from '@vue/test-utils'
import CreateTask from '@/components/CreateTask'
import BootstrapVue from 'bootstrap-vue'

const localVue = createLocalVue()
localVue.use(BootstrapVue)

describe('CreateTask tests', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(CreateTask, { localVue })
  })

  afterEach(() => {
    wrapper.destroy()
  })
  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy()
  })

  it('renders an input-group', () => {
    const titleInput = wrapper.find('.input-group')
    expect(titleInput.exists()).toBe(true)
  })

  it('Interacting with the create task button calls createTask method', async () => {
    const createTask = jest.fn()
    wrapper.setMethods({ createTask: createTask })

    const titleInput = wrapper.find('.input-group .btn')
    expect(createTask).not.toHaveBeenCalled()
    await titleInput.trigger('click')
    expect(createTask).toHaveBeenCalled()
  })
})
