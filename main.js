import Vue from 'vue'
import App from './components/App.vue'

// mount a new Vue instance
var vm = new Vue({
  el: '#app',
  render: h => h(App),
  data: {
    title: 'Big Boggle'
  },
  components: {
    App
  }
})
