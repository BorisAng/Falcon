import { createLocalVue, mount } from '@vue/test-utils'
import Vuex from 'vuex'
import MainContent from '@/components/MainContent'
import CreateTask from '@/components/CreateTask'
import BootstrapVue from 'bootstrap-vue'
import mergeWith from 'lodash.mergewith'
import TasksList from "@/components/TasksList";
import TaskInfo from "@/components/TaskInfo";

const localVue = createLocalVue()
localVue.use(BootstrapVue)
localVue.use(Vuex)

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

describe('MainContent tests', () => {
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
          state: {
            selectedTask: task
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
        title: 'Test Title'
      },
      data () {
        return {
          tasks: [
            {
              createdAt: 1602177102140,
              updatedAt: 1602177102140,
              id: 12,
              title: 'afasfasfsafa',
              description: '',
              priority: 0,
              completed: false,
              project: null
            }
          ]
        }
      },
      store: createStore()
    }
    return mount(
      MainContent,
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

  it('should render CreateTask component when loaded', () => {
    const wrapper = createWrapper()
    const createTask = wrapper.findComponent(CreateTask)
    expect(createTask.exists()).toBe(true)
  })

  it('should render TasksList component when loaded', () => {
    const wrapper = createWrapper()
    const tasksList = wrapper.findComponent(TasksList)
    expect(tasksList.exists()).toBe(true)
  })

  it('should render TaskInfo component when selected task has an id', () => {
    const wrapper = createWrapper()
    const tasksList = wrapper.findComponent(TaskInfo)
    expect(tasksList.exists()).toBe(true)
  })
})
