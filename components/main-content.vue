<template lang="html">
  <div class="main-content">
    <boggle-board v-bind:dice="dice"></boggle-board>
  </div>
</template>

<script>
import BoggleBoard from './boggle-board.vue'

export default {
  props: ['dice'],
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
