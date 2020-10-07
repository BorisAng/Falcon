<template>
  <b-button
    :size="size ? size : 'sm'"
    class="mr-1"
    variant="outline-primary"
    block
    v-b-hover="handleHover"
  >
    <b-iconstack>
      <b-icon-circle stacked v-if="!isHovered"/>
      <b-icon-check-2-circle stacked v-else />
    </b-iconstack>
  </b-button>
</template>

<script>
import { BIconstack, BIconCircle, BIconCheck2Circle } from 'bootstrap-vue'
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
  methods: {
    // Handles hovering over the complete task button
    handleHover (hovered) {
      this.isHovered = hovered
    }
  }
}
</script>

<style scoped>

</style>
