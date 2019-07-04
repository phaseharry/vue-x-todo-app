import axios from 'axios'
import { cpus } from 'os'

const state = {
  todos: []
}

const getters = {
  allTodos: state => state.todos
}

const actions = {
  fetchTodos: ({ commit }) => {
    //actions methods gets passed in an object. Commit is what we do to "commit" a mutation since we don't touch the mutation directly
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.data)
      .then(todos => commit('setTodos', todos))
      .catch(err => console.error(err))
    // commit takes the name of the mutation you want to happen and the payload as an argument (line 24-28)
  },
  addTodo({ commit }, title) {
    /* 
     the first argument of a method is always a Vue object with a key of commit inside. 
     Any arguments after that is passed in by the developer to do some specific action(ex. making a post request to a server)
    */
    return axios
      .post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed: false
      })
      .then(res => res.data)
      .then(newTodo => commit('newTodo', newTodo))
  }
}

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => (state.todos = [todo, ...state.todos])
  /* 
    when commit is called and passed in ('setTodos', payload), VueX will pass in the state as the first argument and our payload as the second argument
    to allow us to mutate our state. 
  */
}

export default {
  state,
  getters,
  actions,
  mutations
}
