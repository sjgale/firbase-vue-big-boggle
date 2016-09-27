<template>
  <div id="app">
    <sidebar></sidebar>
    <main-content v-bind:dice="dice"></main-content>
  </div>
</template>

<script>
  import store from '../store'
  import Sidebar from './sidebar.vue'
  import MainContent from './main-content.vue'

  export default {

    components: {
      Sidebar,
      MainContent
    },

    data () {
      return {
        title: "Big Boggle",
        dice: []
      }
    },

    created () {
      // assign the event handler 'updateBoggleBoard' to the 'data-updated' event
      store.on('data-updated', this.updateBoggleBoard)
    },

    methods: {
      updateBoggleBoard (boggleData) {
        console.log("Boggle board updating.")
        this.dice = boggleData
      }
    }

  }

</script>

<style lang="css">
  html {
    box-sizing: border-box;
  }

  html, body, #app {
    height: 100%;
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
</style>
