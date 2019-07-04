import Vue from 'vue'
import App from './App.vue'

import store from './store'

Vue.config.productionTip = false

new Vue({
  store, // adding our single source of truth store into our Vue app instance (similiar to passing a Redux store to a provider with React-Redux)
  render: h => h(App)
}).$mount('#app')
