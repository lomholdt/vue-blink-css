import Vue from 'vue'
import App from './App.vue'
import VueBlink from 'plugin'

Vue.use(VueBlink)

new Vue({
  el: '#app',
  render: h => h(App)
})
