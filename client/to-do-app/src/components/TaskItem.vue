<template>
  <b-row
    no-gutters
    class="align-items-center mb-2"
  >
    <!-- Complete Task Button -->
    <b-col
      v-if="!task.completed"
      sm="1"
      class="pr-2"
    >
      <complete-task-button
        :size="'lg'"
        :task="task"
        @updateTasks="updateTasks"
      />
    </b-col>

    <b-col
      :sm="!task.completed ? '11' : '12'"
    >
      <b-list-group-item
        @click="selectTask"
        button
        v-b-tooltip.hover title="Select a Task"
      >
        <b-row
          no-gutters
          class="align-items-center"
        >

          <!-- Task Title -->
          <b-col sm="8">
            {{ task.title }}
          </b-col>

          <b-col sm="3">
            {{ task.description }}
          </b-col>

        </b-row>
      </b-list-group-item>
    </b-col>
  </b-row>
</template>

<script>
import CompleteTaskButton from '@/components/CompleteTaskButton'
import { mapActions } from 'vuex'

export default {
  name: 'TaskItem',
  components: {
    CompleteTaskButton
  },
  props: {
    task: Object
  },
  methods: {
    // Vuex method to update the selected task
    ...mapActions('app', ['updateSelectedTask']),

    /**
     * @description Handles task selection. Updates Vuex selected task
     */
    selectTask () {
      this.updateSelectedTask(this.task)
    },

    /**
     * @description Responds to update tasks event
     */
    updateTasks () {
      this.$emit('updateTasks')
    }
  }
}
</script>

<style scoped>

</style>
