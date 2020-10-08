<template>
  <b-col xl="3">
    <b-card>
      <b-card-body>

        <b-row
          no-gutters
          class="mb-3"
        >

          <!-- Complete Task Button -->
          <b-col
            sm="2"
            v-if="!selectedTaskClone.completed"
          >
            <complete-task-button
              :size="'md'"
            />
          </b-col>

          <!-- Edit Task Title -->
          <b-col
            :sm="selectedTaskClone.completed ? '10' : '8'"
            class="px-2"
          >
            <b-form-input
              class="border-0"
              type="text"
              placeholder="Enter task title"
              v-model="selectedTaskClone.title"
              autocomplete="off"
              @blur="storeNewTaskTitle"
              @keydown.enter.native="storeNewTaskTitle"
            />
          </b-col>

          <b-col sm='2'>
            <b-btn
              variant="outline-danger"
              @click="deleteTask"
              block
            >
              <b-icon-trash/>
            </b-btn>
          </b-col>
        </b-row>

        <b-form-textarea
          id="textarea"
          v-model="selectedTaskClone.description"
          placeholder="Enter task description"
          size="sm"
          rows="3"
          max-rows="6"
          autocomplete="off"
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
      selectedTaskClone: {
        title: '',
        description: ''
      },
      selectedTaskPristine: {
        title: '',
        description: ''
      },
      titleChanged: false,
      descriptionChanged: false
    }
  },
  watch: {

    /**
     * @description Watches the selected task for a change and assign clone and pristine values.
     */
    selectedTask () {
      this.selectedTaskClone = JSON.parse(JSON.stringify(this.selectedTask))
      this.selectedTaskPristine = JSON.parse(JSON.stringify(this.selectedTask))
    },

    /**
     * @description Watches the selected task CLONE for a change and assigns the
     * titleChanged and descriptionChanged properties accordingly.
     */
    selectedTaskClone: {
      handler (newVal) {
        const sameTitles = JSON.stringify(newVal.title) === JSON.stringify(this.selectedTaskPristine.title)
        sameTitles ? this.titleChanged = false : this.titleChanged = true

        const sameDescriptions = JSON.stringify(newVal.description) === JSON.stringify(this.selectedTaskPristine.description)
        sameDescriptions ? this.descriptionChanged = false : this.descriptionChanged = true
      },
      deep: true
    }
  },
  computed: {
    // Get the selectedTask from Vuex
    ...mapState('app', ['selectedTask'])
  },
  methods: {
    // Get the actions (i.e. methods) to update the Vuex title and description
    ...mapActions('app', ['updateTaskTitle', 'updateTaskDescription']),

    /**
      @description Helper function handles the storage of the new task title.
      Make back-end call only if the local title has changed.
      The local title also must have a value and a task id.
      On success, update Vuex (i.e. Update UI)
     */
    async storeNewTaskTitle () {
      if (this.titleChanged) {
        if (this.selectedTaskClone.title && this.selectedTaskClone.id) {
          // Make back-end call with new title
          const putTaskResult = await AppService.putTask({
            title: this.selectedTaskClone.title
          }, this.selectedTaskClone.id)

          // Update Vuex
          if (putTaskResult.createdAt) {
            this.updateTaskTitle(this.selectedTaskClone.title)
            this.titleChanged = false
          }
        }
      }
    },

    /**
      @description Helper function handles the storage of the new task description.
      Make back-end call only if the local description has changed.
      The local description also must have a value and a task id.
      On success, update Vuex (i.e. Update UI)
     */
    async storeNewTaskDescription () {
      if (this.descriptionChanged) {
        if (this.selectedTaskClone.description && this.selectedTaskClone.id) {
          // Make back-end call with new description
          const putTaskResult = await AppService.putTask({
            title: this.selectedTaskClone.description
          }, this.selectedTaskClone.id)

          // Update Vuex
          if (putTaskResult.createdAt) {
            this.updateTaskDescription(this.selectedTaskClone.description)
            this.descriptionChanged = false
          }
        }
      }
    },

    /**
     * @description Displays a confirmation box to allow deletion
     */
    deleteTask () {
      this.$bvModal.msgBoxConfirm('Are you sure you want to delete the selected task?', {
        title: 'Delete Task',
        size: 'md',
        okVariant: 'danger',
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
