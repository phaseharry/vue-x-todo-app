<template>
  <div>
    <h3>Todos</h3>
    <div class="todos">
      <div v-bind:key="todo.id" v-for="todo in allTodos" class="todo">{{ todo.title }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
// mapGetters is basically like connect with mapStateToProps. It allows our components to have access to the store.
// mapActions is similar to mapDispatchToProps as it maps the actions you created within each modules and put it in a component
export default {
  name: "Todos",
  methods: {
    ...mapActions(["fetchTodos"]) // spreading out the key-value pairs so that fetchTodo will be the method that fetches a list of todos
  },
  computed: mapGetters(["allTodos"]),
  /* 
    mapGetters takes an array as an argument. Each element in the array is a string that 
    represents a getter method we wrote a module/reducer file within the getter object.
    mapActions does the same thing as mapGetters but for methods within your actions object
  */
  created() {
    this.fetchTodos();
  }
};
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}

.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
</style>