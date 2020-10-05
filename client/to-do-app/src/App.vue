<template>
  <b-container
    id="app"
    :fluid="true"
    class="px-0 mt-0"
  >
    <!-- Top Navigation Bar -->
    <navigation/>

    <!--      :style="{'height': '90vh'}"-->
    <b-row
      no-gutters
      class="px-3 py-1"
    >
      <!-- Main Content -->
      <main-content :title="`Tasks`"/>

      <!-- Task Info -->
      <task-info :selectedTask="selectedTask"/>
    </b-row>

  </b-container>
</template>

<script>
import Navigation from '@/components/Navigation'
import MainContent from '@/components/MainContent'
import TaskInfo from '@/components/TaskInfo'
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: { Navigation, MainContent, TaskInfo },
  computed: {
    ...mapState('app', ['selectedTask'])
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
