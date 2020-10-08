<template>
  <b-button
    :size="size ? size : 'sm'"
    class="mr-1"
    variant="outline-primary"
    block
    v-b-hover="handleHover"
    @click="handleClick"
    v-b-tooltip.hover title="Mark As Completed"
  >
    <b-iconstack>
      <b-icon-circle stacked v-if="!isHovered"/>
      <b-icon-check-2-circle stacked v-else />
    </b-iconstack>
  </b-button>
</template>

<script>
import { BIconstack, BIconCircle, BIconCheck2Circle } from 'bootstrap-vue'
import AppService from '@/services/app.service'

export default {
  name: 'CompleteTaskButton',
  components: {
    BIconstack,
    BIconCircle,
    BIconCheck2Circle
  },
  props: {
    size: String,
    task: Object
  },
  data () {
    return {
      isHovered: false
    }
  },
  computed: {

  },
  methods: {

    /**
     * @description Handles hovering over the complete task button
     * @param hovered - the state of the hovered
     */
    handleHover (hovered) {
      this.isHovered = hovered
    },

    /**
     * @description Handles clicking the complete button
     */
    async handleClick () {
      // Make back-end call with new title
      const putTaskResult = await AppService.putTask({
        completed: true
      }, this.task.id)

      // Update Vuex
      if (putTaskResult.createdAt) {
        this.$emit('updateTasks')
      }
    }
  }
}
</script>

<style scoped>

</style>
