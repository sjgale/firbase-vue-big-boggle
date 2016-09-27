<template lang="html">
  <div class="boggle-board">
  <table>
    <tr v-for="row in dice">
      <td v-for="column in row">
        <div class="content">
          <div class="center-letter">{{ column }}</div>
        </div>
      </td>
    </tr>
  </table>
  <button v-on:click="reRoll">Roll</button>
  </div>
</template>

<script>
  import store from '../store'

  export default {
    props: ['dice'],
    methods: {
      reRoll () {
        store.setDiceSequence()
      }
    }
  }

</script>

<style lang="sass">
  table {
    margin: 5%;
    width: 80%;
    max-width: 700px;
    background: black;
    border-spacing: 3px;

    td {
      width:25%;
      position:relative;
      text-align: center;
      vertical-align: middle;
      background: white;

      &:after {
        content: '';
        display: block;
        margin-top: 100%;
      }

      .content {
        position: absolute;
        top: 0;
        width: 99%;
        height: 100%;
        font-size: 50px;

        .center-letter {
          position: absolute;
          top: 50%;
          left: 50%;
          margin: -30px 0 0 -30px;
          width: 60px;
          line-height: 60px;
        }
      }
    }
  }

</style>
