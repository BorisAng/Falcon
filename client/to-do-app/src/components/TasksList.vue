<template>
  <div>
    <!-- Current Tasks -->
    <b-list-group>
      <task-item
        v-for="task in nonCompletedTask"
        :key="task.id + 'notCompleted'"
        :task="task"
      />
    </b-list-group>

    <h4>Completed</h4>

    <!-- Completed Tasks -->
    <b-list-group>
      <task-item
        v-for="task in completedTasks"
        :key="task.id + 'completed'"
        :task="task"
      />
    </b-list-group>
  </div>
</template>

<script>
import TaskItem from '@/components/TaskItem'

export default {
  name: 'TasksList',
  components: { TaskItem },
  props: {
    tasks: Array
  },
  computed: {
    completedTasks () {
      if (this.tasks) {
        return this.tasks.filter(task => {
          return task.completed === true
        })
      } else {
        return []
      }
    },
    nonCompletedTask () {
      if (this.tasks) {
        return this.tasks.filter(task => {
          return task.completed === false
        })
      } else {
        return []
      }
    }
  },
  data () {
    return {}
  }
}
</script>

<style scoped>

</style>
