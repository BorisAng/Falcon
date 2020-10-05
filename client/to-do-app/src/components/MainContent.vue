<template>
  <b-col sm="9" class="border-right">
    <h1 class="text-left">{{title}}</h1>

    <!-- Create To Do -->
    <create-task/>

    <!-- Tasks List -->
    <tasks-list/>

  </b-col>
</template>

<script>
import CreateTask from '@/components/CreateTask'
import TasksList from '@/components/TasksList'

import AppService from '@/services/app.service'
export default {
  name: 'MainContent',
  components: { CreateTask, TasksList },
  props: {
    title: String
  },
  data () {
    return {
      tasks: null
    }
  },
  async created () {
    this.tasks = await AppService.getTasks()
  }
}
</script>

<style scoped>

</style>
