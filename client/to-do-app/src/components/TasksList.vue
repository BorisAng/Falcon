<template>
<!--  <b-table-->
<!--    :items="shrinkedTasks"-->
<!--    :fields="fields"-->
<!--    striped-->
<!--    hover-->
<!--    selectable-->
<!--    select-mode="single"-->
<!--    responsive="sm"-->
<!--    thead-class="d-none"-->
<!--    @row-contextmenu="rowRightClicked"-->
<!--  >-->
<!--    <template v-slot:cell(completeTask)="row">-->

<!--    </template>-->
<!--  </b-table>-->
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
  },
  computed: {

    // Restructures the tasks props
    shrinkedTasks () {
      if (this.tasks) {
        return this.tasks.map(task => {
          return {
            title: task.title,
            description: task.description
          }
        })
      } else {
        return []
      }
    }
  },
  methods: {

    // Responds to right clicks on
    rowRightClicked (item, index, evt) {
      // Prevent native OS/Browser context menu showing
      evt.preventDefault()
      console.log('right clicked row ' + index, evt.type)
    }
  }
}
</script>

<style scoped>

</style>
