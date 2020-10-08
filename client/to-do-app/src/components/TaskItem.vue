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

    <b-col sm="11">
      <b-list-group-item
        @click="selectTask"
        button
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

    // Handles task selection
    selectTask () {
      this.updateSelectedTask(this.task)
    },

    updateTasks () {
      this.$emit('updateTasks')
    }
  }
}
</script>

<style scoped>

</style>
