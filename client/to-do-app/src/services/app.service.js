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
  async putTask (params, id) {
    const result = await ApiService.patch(`tasks/${id}`, params)
      .catch(error => {
        console.error(error)
      })
    return result.data
  },

  // POST requests
  async postTask (params) {
    const result = await ApiService.post('tasks', params)
      .catch(error => {
        console.error(error)
      })
    return result.data
  },

  // DELETE requests
  async deleteTask (id) {
    const result = await ApiService.delete(`tasks/${id}`)
      .catch(error => {
        console.error(error)
      })
    return result.data
  }
}
