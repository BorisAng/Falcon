import { createLocalVue, mount } from '@vue/test-utils'
import CompleteTaskButton from '@/components/CompleteTaskButton'
import BootstrapVue from 'bootstrap-vue'

const localVue = createLocalVue()
localVue.use(BootstrapVue)

describe('CompleteTaskButton tests', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(CompleteTaskButton, {
      propsData: {
        size: 'xl'
      },
      localVue
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })
  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy()
  })

  it('renders a button using size prop', () => {
    const button = wrapper.find('.btn')
    expect(button.exists()).toBe(true)
    expect(button.classes()).toContain('btn-xl')
  })

  it('Interacting with the complete task button calls handleClick method', async () => {
    const handleClick = jest.fn()
    wrapper.setMethods({ handleClick: handleClick })

    const titleInput = wrapper.find('.btn')
    expect(handleClick).not.toHaveBeenCalled()
    await titleInput.trigger('click')
    expect(handleClick).toHaveBeenCalled()
  })
})
