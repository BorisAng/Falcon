<template>
  <b-container
    id="app"
    :fluid="true"
    class="px-0 mt-0"
  >
    <!-- Top Navigation Bar -->
    <navigation/>

    <!-- Router View (Renders the current route component ) -->
    <router-view/>

  </b-container>
</template>

<script>
import Navigation from '@/components/Navigation'

export default {
  name: 'App',
  components: { Navigation }
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
