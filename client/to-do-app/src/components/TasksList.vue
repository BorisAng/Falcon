<template>
  <div>
    <!-- Current Tasks -->
    <b-list-group class="mb-2">
      <task-item
        v-for="task in nonCompletedTask"
        :key="task.id + 'notCompleted'"
        :task="task"
      />
    </b-list-group>

    <b-card
      no-body
      class="mb-1"
    >
      <b-card-header
        header-tag="header"
        class="p-1"
        role="tab"
      >
        <b-button
          block
          href="#"
          variant="primary"
          @click="collapsableShow = !collapsableShow"
        >
          <h4 class="text-left">Completed Tasks</h4>
        </b-button>
      </b-card-header>
      <b-collapse
        :id="'collapse'"
        v-model="collapsableShow"
        role="tabpanel"
      >
        <b-card-body>
          <!-- Completed Tasks -->
          <b-list-group>
            <task-item
              v-for="task in completedTasks"
              :key="task.id + 'completed'"
              :task="task"
            />
          </b-list-group>

        </b-card-body>
      </b-collapse>
    </b-card>
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
  data () {
    return {
      collapsableShow: false
    }
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
  }
}
</script>

<style scoped>

</style>
