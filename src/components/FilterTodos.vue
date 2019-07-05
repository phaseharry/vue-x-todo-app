<template>
  <div>
    Filter Todos:
    <select v-on:change="filterTodos($event)">
      <!-- $event will pass in the event object created when a new option is selected -->
      <option value="200">200</option>
      <option value="100">100</option>
      <option value="50">50</option>
      <option value="20">20</option>
      <option value="10">10</option>
      <option value="5">5</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "FilterTodos",
  methods: {
    ...mapActions(["filterTodos"])
  }
};
</script>

<style>
select {
  margin-top: 20px;
  padding: 6px;
  border: #41b883 1px solid;
}
</style>