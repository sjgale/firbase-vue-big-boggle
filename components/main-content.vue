<template lang="html">
  <div class="main-content">
    <boggle-board></boggle-board>
  </div>
</template>

<script>
import BoggleBoard from './boggle-board.vue'

export default {
  methods: {},
  components: {
    BoggleBoard
  }
}
</script>

<style lang="sass">
  .main-content {
    padding-left: 130px;
  }
</style>
