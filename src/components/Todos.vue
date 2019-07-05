<template>
  <div>
    <h3>Todos</h3>
    <div class="legend">
      <span>Double click to mark as complete</span>
      <span>
        <span class="incomplete-box"></span> = Incomplete
      </span>
      <span>
        <span class="complete-box"></span> = complete
      </span>
    </div>
    <div class="todos">
      <div
        v-bind:class="{'is-complete': todo.completed}"
        @dblclick="onDblClick(todo)"
        v-for="todo in allTodos"
        :key="todo.id"
        class="todo"
      >
        {{ todo.title }}
        <i class="fas fa-trash-alt" @click="deleteTodo(todo.id)"></i>
      </div>
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
    ...mapActions(["fetchTodos", "deleteTodo", "updateTodo"]), // spreading out the key-value pairs so that fetchTodo will be the method that fetches a list of todos
    onDblClick(todo) {
      // console.log(todo);
      const updTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed
      };
      // console.log("updatedTodo", updTodo);
      this.updateTodo(updTodo);
    }
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

i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}

.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}

.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}

.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}

.is-complete {
  background-color: #35495e;
  color: #fff;
}

@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>