<template>
  <b-col
    sm="9"
    class="border-right pr-4 text-left"
  >
    <h1>{{title}}</h1>

    <!-- Create To Do -->
    <create-task
      @updateTasks="updateTasks()"
    />

    <!-- Tasks List -->
    <tasks-list
      :tasks="tasks"
    />

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
  },
  methods: {

    // Responds to updateTask event
    async updateTasks () {
      this.tasks = await AppService.getTasks()
    }
  }
}
</script>

<style scoped>

</style>
