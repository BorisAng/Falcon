<template>
  <b-input-group class="mb-2">
    <b-input-group-prepend>
      <b-button variant="outline-info" class="p-0">
        <b-icon-plus class="mx-3"></b-icon-plus>
      </b-button>
   </b-input-group-prepend>

    <b-form-input
      type="text"
      placeholder="Add a task"
    />

  </b-input-group>
</template>

<script>
import { BIconPlus } from 'bootstrap-vue'
export default {
  name: 'CreateTask',
  components: { BIconPlus }
}
</script>

<style scoped>

</style>
