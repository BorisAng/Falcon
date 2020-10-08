<template>
  <div>
    <!-- Current Tasks -->
    <b-list-group
      class="mb-2 overflow-auto"
      :style="{ height: '450px' }"
    >
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
          <h5 class="text-left mb-0">
            Show Completed Tasks
            <b-icon-chevron-down class="align-middle"/>
          </h5>
        </b-button>
      </b-card-header>
      <b-collapse
        :id="'collapse'"
        v-model="collapsableShow"
        role="tabpanel"
      >
        <perfect-scrollbar
          class="matched-firms-scroll-area"
          :options="scrollSettings"
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
        </perfect-scrollbar>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
import TaskItem from '@/components/TaskItem'
import { BIconChevronDown } from 'bootstrap-vue'

export default {
  name: 'TasksList',
  components: { TaskItem, BIconChevronDown },
  props: {
    tasks: Array
  },
  data () {
    return {
      collapsableShow: false,
      scrollSettings: {
        maxScrollbarLength: 100,
        minScrollbarLength: 150,
        suppressScrollX: true,
        handlers: ['drag-thumb', 'wheel']
      }
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
.tasks-scroll-area {
  height: 250px;
}
</style>
