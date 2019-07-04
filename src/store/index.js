import Vuex from 'vuex'
import Vue from 'vue'

import todos from './modules/todos'
// Load VueX
Vue.use(Vuex)

// Create store
// Creates the store and passing our "modules"/reducers into the store to be combined into one final reducer/store
export default new Vuex.Store({
  modules: {
    todos
  }
})
