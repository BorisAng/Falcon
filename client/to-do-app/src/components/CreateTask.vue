<template>
  <b-input-group class="mb-2">
    <b-input-group-prepend>
      <b-button
        variant="outline-primary"
        @click="createTask"
        @keydown.enter.native="createTask"
      >
        <b-icon-plus></b-icon-plus>
      </b-button>
   </b-input-group-prepend>

    <b-form-input
      type="text"
      placeholder="Add a task"
      v-model="taskTitle"
      autocomplete="off"
      @keydown.enter.native="createTask"
    />

  </b-input-group>
</template>

<script>
import { BIconPlus } from 'bootstrap-vue'
import AppService from '@/services/app.service'

export default {
  name: 'CreateTask',
  components: { BIconPlus },
  data () {
    return {
      taskTitle: ''
    }
  },
  methods: {

    /**
     *   Create a Task using AppService.
     *   @emits updateTasks
     */
    async createTask () {
      const params = {
        title: this.taskTitle,
        description: '',
        completed: false
      }
      if (this.taskTitle) {
        const postTaskResult = await AppService.postTask(params)
        if (postTaskResult.createdAt) {
          this.$emit('updateTasks')
          this.taskTitle = ''
        }
      } else {
        this.$bvModal.msgBoxOk('Please, enter a task title', {
          title: 'Enter Task Title',
          size: 'md',
          buttonSize: 'md',
          okVariant: 'success'
        })
          .then((confirmed) => {
            if (confirmed) {
              this.handleDelete(this.selectedTask.id)
            }
          })
          .catch(err => {
            console.log(err)
          })
      }
    }
  }
}
</script>

<style scoped>

</style>
