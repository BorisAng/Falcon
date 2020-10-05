import ApiService from '@/services/api.service'

export default {
  async getTasks () {
    const result = await ApiService.get('tasks')
      .catch(error => {
        console.error(error)
      })
    console.log(result)
    return result.data
  }
}
