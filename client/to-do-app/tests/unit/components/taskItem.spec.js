import { createLocalVue, mount } from '@vue/test-utils'
import Vuex from 'vuex'
import mergeWith from 'lodash.mergewith'
import TaskItem from '@/components/TaskItem'
import BootstrapVue from 'bootstrap-vue'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(BootstrapVue)

function customizer (ovjValue, srcValue) {
  /*
      If the property that takes precedence is an array,
      overwrite the value rather than merging the arrays
    */
  if (Array.isArray(srcValue)) {
    return srcValue
  }
  /*
      If the property that takes precedence is an empty object,
      overwrite the property with an empty object
     */
  if (srcValue instanceof Object && Object.keys(srcValue).length === 0) {
    return srcValue
  }
}

describe('TaskItem tests', () => {
  const task = {
    createdAt: 1602177102140,
    updatedAt: 1602177102140,
    id: 12,
    title: 'afasfasfsafa',
    description: '',
    priority: 0,
    completed: false,
    project: null
  }

  let defaultStoreConfig = {}

  function createStore (overrides) {
    defaultStoreConfig = {
      modules: {
        app: {
          namespaced: true,
          actions: {
            updateSelectedTask: jest.fn()
          }
        }
      }
    }
    return new Vuex.Store(
      mergeWith(defaultStoreConfig, overrides, customizer)
    )
  }

  function createWrapper (overrrides) {
    const defaultMountingOptions = {
      localVue,
      propsData: {
        task: task
      },
      store: createStore()
    }
    return mount(
      TaskItem,
      mergeWith(
        defaultMountingOptions,
        overrrides,
        customizer)
    )
  }

  it('is a Vue instance', () => {
    const wrapper = createWrapper()
    expect(wrapper.isVueInstance).toBeTruthy()
  })

  it('renders a complete task button when task.completed === true', () => {
    const wrapper = createWrapper()
    const completeButton = wrapper.find('.btn-outline-primary')
    expect(completeButton.exists()).toBe(true)
  })

  it('renders a task title', () => {
    const wrapper = createWrapper()
    const completeButton = wrapper.find('.col-sm-8')
    expect(completeButton.exists()).toBe(true)
    expect(completeButton.text()).toBe(task.title)
  })

  it('renders a task description', () => {
    const wrapper = createWrapper()
    const completeButton = wrapper.find('.col-sm-3')
    expect(completeButton.exists()).toBe(true)
    expect(completeButton.text()).toBe(task.description)
  })

  it('calls Vuex\'s updateSelectedTask action on clicking a task', () => {
    const wrapper = createWrapper()
    const taskButton = wrapper.find('.list-group-item')
    expect(taskButton.exists()).toBe(true)
    taskButton.trigger('click')
    expect(defaultStoreConfig.modules.app.actions.updateSelectedTask).toHaveBeenCalled()
  })
})
