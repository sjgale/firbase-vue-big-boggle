<template lang="html">
  <div class="sidebar">
    <h1>Big Boggle</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {},
  ready () {},
  attached () {},
  methods: {},
  components: {}
}
</script>

<style lang='sass';>
  .sidebar {
    height: 100%;
    display: inline-block;
    background: darkSlateGray;
    position: fixed;
    top:0;
    left: 0;
    width: 130px;

    h1 {
      color: white;
      font-size: 22px;
      text-align: center;
    }
  }
</style>
