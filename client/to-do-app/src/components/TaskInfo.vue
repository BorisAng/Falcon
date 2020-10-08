<template>
  <b-col
    sm="3"
    class="pl-3"
  >
    <b-card>
      <b-card-body>

        <b-row
          no-gutters
          class="mb-3"
        >

          <!-- Complete Task Button -->
          <b-col sm="2">
            <complete-task-button
              :size="'md'"
            />
          </b-col>

          <!-- Edit Task Title -->
          <b-col sm="9" class="px-2">
            <b-form-input
              class="border-0"
              type="text"
              placeholder="Enter task title"
              v-model="localSelectedTaskTitle"
              autocomplete="off"
              @blur="storeNewTaskTitle"
              @keydown.enter.native="storeNewTaskTitle"
            />
          </b-col>

          <b-col sm='1'>
            <b-btn
              variant="outline-danger"
              @click="deleteTask"
            >
              <b-icon-trash/>
            </b-btn>
          </b-col>
        </b-row>

        <b-form-textarea
          id="textarea"
          v-model="localSelectedTaskDescription"
          placeholder="Enter task description"
          size="sm"
          rows="3"
          max-rows="6"
          @blur="storeNewTaskDescription"
          @keydown.enter.exact.prevent
          @keyup.enter.exact="storeNewTaskDescription"
          @keydown.enter.shift.exact="'\n'"
        />

      </b-card-body>
    </b-card>
  </b-col>
</template>

<script>
import AppService from '@/services/app.service'
import CompleteTaskButton from '@/components/CompleteTaskButton'
import { BIconTrash } from 'bootstrap-vue'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'TaskInfo',
  components: {
    CompleteTaskButton,
    BIconTrash
  },
  data () {
    return {
      taskTitle: '',
      taskDescription: '',
      taskTitleChanged: false,
      taskDescriptionChanged: false
    }
  },
  created () {
    this.taskTitle = this.selectedTask.title
  },
  computed: {
    ...mapState('app', ['selectedTask']),

    /**
      @description This property returns either the stored in Vuex task title
      or a local data value (i.e. variable)
     */
    localSelectedTaskTitle: {
      get () {
        return this.selectedTask.title !== '' && this.taskTitleChanged !== true
          ? this.selectedTask.title
          : this.taskTitle
      },
      set (newData) {
        this.taskTitle = newData
        this.taskTitleChanged = true
      }
    },

    /**
      @description Returns either the stored in Vuex task description
      or a local data value (i.e. variable)
     */
    localSelectedTaskDescription: {
      get () {
        return this.selectedTask.description !== '' && this.taskDescriptionChanged !== true
          ? this.selectedTask.description
          : this.taskDescription
      },
      set (newData) {
        this.taskDescription = newData
        this.taskDescriptionChanged = true
      }
    }
  },
  methods: {
    ...mapActions('app', ['updateTaskTitle', 'updateTaskDescription']),

    /**
      @description Helper function handles the storage of the new task title.
      Make back-end call only if the localSelectedTaskTitle is assigned.
      On success, update Vuex and the local data properties.
      Otherwise, revert the value of taskTitleChanged because the setter
      in the computed property would have changed it.
     */
    async storeNewTaskTitle () {
      if (this.localSelectedTaskTitle) {
        const putTaskResult = await AppService.putTask({ title: this.localSelectedTaskTitle }, this.selectedTask.id)
        if (putTaskResult.createdAt) {
          this.updateTaskTitle(this.localSelectedTaskTitle)
          this.taskTitle = ''
          this.taskTitleChanged = false
        }
      } else {
        this.taskTitleChanged = false
      }
    },

    /**
      @description Helper function handles the storage of the new task description.
      Make back-end call only if the localSelectedTaskDescription is assigned.
      On success, update Vuex and the local data properties.
      Otherwise, revert the value of taskDescriptionChanged because the setter
      in the computed property would have changed it.
     */
    async storeNewTaskDescription () {
      if (this.localSelectedTaskDescription) {
        const putTaskResult = await AppService.putTask({ title: this.localSelectedTaskDescription }, this.selectedTask.id)
        if (putTaskResult.createdAt) {
          this.updateTaskDescription(this.localSelectedTaskDescription)
          this.taskDescription = ''
          this.taskDescriptionChanged = false
        }
      } else {
        this.taskDescriptionChanged = false
      }
    },

    /**
     * @description Displays a confirmation box to allow deletion
     */
    deleteTask () {
      this.$bvModal.msgBoxConfirm('Are you sure you want to delete the selected task?', {
        title: 'Delete Task',
        size: 'md',
        okVariant: 'success',
        okTitle: 'YES',
        cancelTitle: 'NO',
        footerClass: 'p-2',
        hideHeaderClose: false,
        centered: true
      })
        .then((confirmed) => {
          if (confirmed) {
            this.handleDelete(this.selectedTask.id)
          }
        })
        .catch(err => {
          console.log(err)
        })
    },

    /**
     *   @description Delete a Task using AppService.
     *   @param {number} The id of the Task
     *   @emits updateTasks
     */
    async handleDelete (id) {
      const deleteTaskResult = await AppService.deleteTask(id)
      if (deleteTaskResult.createdAt) {
        this.$emit('updateTasks')
      }
    }
  }
}
</script>

<style scoped>

</style>
