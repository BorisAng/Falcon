<template>
  <b-list-group>

    <!-- Task Item -->
    <task-item
      v-for="task in tasks"
      :key="task.id"
      :task="task"
    />
  </b-list-group>
</template>

<script>
import TaskItem from '@/components/TaskItem'

export default {
  name: 'TasksList',
  components: { TaskItem },
  props: {
    tasks: Array
  },
  data () {
    return {}
  }
}
</script>

<style scoped>

</style>
