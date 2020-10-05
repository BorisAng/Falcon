import ApiService from '@/services/api.service'

export default {

  // GET requests
  async getTasks () {
    const result = await ApiService.get('tasks')
      .catch(error => {
        console.error(error)
      })
    return result.data
  },

  // PUT requests

  // POST requests
  async postTask (params) {
    const result = await ApiService.post('tasks', params)
      .catch(error => {
        console.error(error)
      })
    return result.data
  }

  // DELETE requests

}
