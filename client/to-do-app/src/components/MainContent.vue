<template>
  <b-col sm="9" class="border-right">
    <h1 class="text-left">Tasks</h1>

    <!-- Create To Do -->
    <create-to-do/>
  </b-col>
</template>

<script>
import CreateToDo from '@/components/CreateToDo'
export default {
  name: 'ToDoContent',
  components: { CreateToDo }
}
</script>

<style scoped>

</style>
