<template>
  <b-row
    no-gutters
    class="px-3 pt-3"
  >
    <b-col
      :xl="selectedTask.title ? '9' : '12'"
      class="pr-xl-3 text-left"
    >
      <h1>Tasks</h1>

      <!-- Create To Do -->
      <create-task @updateTasks="updateTasks"/>

      <!-- Tasks List -->
      <tasks-list
        :tasks="tasks"
        @updateTasks="updateTasks"
      />

    </b-col>

    <!-- Task Info -->
    <task-info
      v-if="selectedTask.id"
      @updateTasks="updateTasks"
    />
  </b-row>
</template>

<script>
import CreateTask from '@/components/CreateTask'
import TasksList from '@/components/TasksList'

import AppService from '@/services/app.service'
import TaskInfo from '@/components/TaskInfo'
import { mapState } from 'vuex'

export default {
  name: 'MainContent',
  components: { CreateTask, TasksList, TaskInfo },
  props: {
    title: String
  },
  data () {
    return {
      tasks: null
    }
  },
  // On creation get the list of tasks
  async created () {
    this.tasks = await AppService.getTasks()
  },
  computed: {
    // Get the selectedTask from Vuex
    ...mapState('app', ['selectedTask'])
  },
  methods: {

    /**
     * @description Responds to updateTasks event
     * @returns {Promise<void>}
     */
    async updateTasks () {
      this.tasks = await AppService.getTasks()
    }
  }
}
</script>

<style scoped>

</style>
