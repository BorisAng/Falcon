<template>
  <b-list-group-item
    @click="selectTask"
    button
  >
    <b-row>
      <b-col sm="1">
        <b-button
          size="sm"
          class="mr-1"
          variant="outline-info"
          block
          v-b-hover="handleHover"
        >
          <b-iconstack>
            <b-icon-circle stacked v-if="!isHovered"/>
            <b-icon-check-2-circle stacked v-else />
          </b-iconstack>
        </b-button>
      </b-col>
      <b-col sm="11">
        {{ task.title }}
      </b-col>
    </b-row>
  </b-list-group-item>
</template>

<script>
import { BIconstack, BIconCircle, BIconCheck2Circle } from 'bootstrap-vue'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'TaskItem',
  components: {
    BIconstack,
    BIconCircle,
    BIconCheck2Circle
  },
  props: {
    task: Object
  },
  data () {
    return {
      isHovered: false
    }
  },
  computed: {
    ...mapState('app', ['selectedTask'])
  },
  methods: {
    ...mapActions('app', ['updateSelectedTask']),

    // Handles task selection
    selectTask () {
      this.updateSelectedTask(this.task)
    },

    // Handles hovering over the complete task button
    handleHover (hovered) {
      this.isHovered = hovered
    }
  }
}
</script>

<style scoped>

</style>
