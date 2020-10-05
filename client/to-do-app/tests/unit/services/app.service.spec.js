import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import AppService from '@/services/app.service'

const mock = new MockAdapter(axios)

const baseURL = 'http://localhost:1337'

const tasks = [
  { db_name: 'Jobs', dxp_dashboardref: 1, dxp_hidden: 0, dxp_position: 1, dxp_ref: 926 },
  { db_name: 'Firms', dxp_dashboardref: 2, dxp_hidden: 0, dxp_position: 2, dxp_ref: 927 },
  { db_name: 'CRM', dxp_dashboardref: 5, dxp_hidden: 0, dxp_position: 3, dxp_ref: 987 }
]

describe('App Service tests', () => {
  test('getTasks should return the tasks list', () => {
    mock.onGet(`${baseURL}/tasks`).reply(200, tasks)
    AppService.getTasks().then(response => {
      expect(response.data).toEqual(tasks)
    })
  })
})
