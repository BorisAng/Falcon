<template>
  <b-container
    id="app"
    :fluid="true"
    class="px-0 mt-0"
  >
    <!-- Top Navigation Bar -->
    <navigation/>

    <!-- TODO: Add <router-view> and render <main-content> and <task-info> inside ??? -->

    <!-- Main Content -->
    <main-content :title="`Tasks`"/>

  </b-container>
</template>

<script>
import Navigation from '@/components/Navigation'
import MainContent from '@/components/MainContent'

export default {
  name: 'App',
  components: { Navigation, MainContent }
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
