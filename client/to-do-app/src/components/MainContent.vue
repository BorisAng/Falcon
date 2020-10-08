<template>
  <!--      :style="{'height': '90vh'}"-->
  <b-row
    no-gutters
    class="px-3 pt-3"
  >
    <b-col
      xl="9"
      class="pr-xl-3 text-left"
    >
      <h1>Tasks</h1>

      <!-- TODO: Add <router-view> and render <create-task> and <tasks-list> inside ??? -->

      <!-- Create To Do -->
      <create-task @updateTasks="updateTasks"/>

      <!-- Tasks List -->
      <tasks-list
        :tasks="tasks"
        @updateTasks="updateTasks"
      />

    </b-col>

    <!-- Task Info -->
    <task-info @updateTasks="updateTasks"/>
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
  async created () {
    this.tasks = await AppService.getTasks()
  },
  computed: {
    // Get the selectedTask from Vuex
    ...mapState('app', ['selectedTask'])
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
