<template>
  <b-col sm="3">
    <b-card>
      <b-card-body>

        <b-row no-gutters>

          <!-- Complete Task Button -->
          <b-col sm="2">
            <complete-task-button/>
          </b-col>

          <!-- Edit Task Title -->
          <b-col sm="10">
            <b-form-input
              type="text"
              placeholder="Add a task"
              v-model="localSelectedTaskTitle"
              autocomplete="off"
            />
          </b-col>
        </b-row>

        <b-form-textarea
          id="textarea"
          v-model="localSelectedTaskDescription"
          placeholder="Enter something..."
          size="sm"
          rows="3"
          max-rows="6"
        />

      </b-card-body>
    </b-card>
  </b-col>
</template>

<script>
import AppService from '@/services/app.service'
import CompleteTaskButton from '@/components/CompleteTaskButton'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'TaskInfo',
  components: {
    CompleteTaskButton
  },
  computed: {
    ...mapState('app', ['selectedTask']),
    localSelectedTaskTitle: {
      get () {
        return this.selectedTask.title
      },
      set (newData) {
        this.updateTaskTitle(newData)
      }
    },
    localSelectedTaskDescription: {
      get () {
        return this.selectedTask.description
      },
      async set (newData) {
        const putTaskResult = await AppService.putTask({ description: newData }, this.selectedTask.id)
        if (putTaskResult) {
          this.updateTaskDescription(newData)
        }
      }
    }
  },
  methods: {
    ...mapActions('app', ['updateTaskTitle', 'updateTaskDescription'])
  }
}
</script>

<style scoped>

</style>
