<template>
  <b-list-group-item
    @click="selectTask"
    button
  >
    <b-row
      no-gutters
      class="align-items-center"
    >

      <!-- Complete Task Button -->
      <b-col
        sm="1"
        class="pr-2"
      >
        <complete-task-button/>
      </b-col>

      <!-- Task Title -->
      <b-col sm="8">
        {{ task.title }}
      </b-col>

      <b-col sm="3">
        {{ task.description }}
      </b-col>

    </b-row>
  </b-list-group-item>
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
    }
  }
}
</script>

<style scoped>

</style>
