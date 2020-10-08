<template>
  <b-button
    :size="size ? size : 'sm'"
    class="mr-1"
    variant="outline-primary"
    block
    v-b-hover="handleHover"
    @click="handleClick"
    :disabled="selectedTask.completed === null || selectedTask.completed === true"
  >
    <b-iconstack>
      <b-icon-circle stacked v-if="!isHovered"/>
      <b-icon-check-2-circle stacked v-else />
    </b-iconstack>
  </b-button>
</template>

<script>
import { BIconstack, BIconCircle, BIconCheck2Circle } from 'bootstrap-vue'
import { mapActions, mapState } from 'vuex'
import AppService from '@/services/app.service'

export default {
  name: 'CompleteTaskButton',
  components: {
    BIconstack,
    BIconCircle,
    BIconCheck2Circle
  },
  props: {
    size: String
  },
  data () {
    return {
      isHovered: false
    }
  },
  computed: {
    // Get the selectedTask from Vuex
    ...mapState('app', ['selectedTask'])
  },
  methods: {
    // Get the actions (i.e. methods) to update the Vuex title and description
    ...mapActions('app', ['updateTaskCompleted', 'updateSelectedTask']),
    /**
     * @description Handles hovering over the complete task button
     * @param hovered - the state of the hovered
     */
    handleHover (hovered) {
      this.isHovered = hovered
      console.log(this.selectedTask.completed)
    },

    /**
     * @description Handles clicking the complete button
     */
    async handleClick () {
      // Make back-end call with new title
      const putTaskResult = await AppService.putTask({
        completed: true
      }, this.selectedTask.id)

      // Update Vuex
      if (putTaskResult.createdAt) {
        this.updateTaskCompleted(true)
        this.updateSelectedTask({
          title: null,
          description: null,
          completed: null
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
