<template>
  <div id="app">
    <sidebar></sidebar>
    <main-content></main-content>
  </div>
</template>

<script>
import Sidebar from './sidebar.vue'
import MainContent from './main-content.vue'

export default {
  data () {
    return {
      title: "Big Boggle"
    }
  },
  components: {
    Sidebar,
    MainContent
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
