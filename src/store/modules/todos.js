import axios from 'axios'

const state = {
  todos: [
    {
      id: 1,
      title: 'Todo One',
      completed: false
    },
    {
      id: 2,
      title: 'Todo Two',
      completed: false
    }
  ]
}

const getters = {
  allTodos: state => state.todos
}

const actions = {}

const mutations = {}

export default {
  state,
  getters,
  actions,
  mutations
}
