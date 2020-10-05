<template>

  <b-list-group>
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
    return {
      fields: [
        { key: 'completeTask', label: 'Complete Task', thStyle: { width: '200px' } },
        { key: 'title', label: 'Title' },
        { key: 'description', label: 'Description' }
      ]
    }
  }
}
</script>

<style scoped>

</style>
