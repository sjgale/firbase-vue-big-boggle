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
    <div class="timer">
      3:00
    </div>
    <br>
    <button v-on:click="go">Start Timer & Roll</button>
    <br>
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
      },
      go () {
        store.setDiceSequence()
        store.startTimer()
      }
    }
  }

</script>

<style lang="sass" scoped>
  .timer {
    font-family: 'Share Tech Mono', monospace;
    color: white;
    background-color: #39AEA9;
    display: inline-block;
    padding: 10px 35px;
    font-size: 70px;
    transition: all .5s;
    box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    margin: 5% 0 0 2%;
  }

  button {
    margin: 15px 0 0 2%;
    background-color: white;
    color: #39AEA9;
    border: 3px solid #39AEA9;
    border-radius: 5px;
    font-size: 32px;
    padding: 10px 35px;
    transition: all .5s;
    box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2);

    &:hover {
      background: #39AEA9;
      color: white;
    }

    &:active {
      position: relative;
      top: 3px;
      box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.3);
    }

    &:focus {
      outline: none;
    }
  }

  table {
    margin: 3% 0 15px 4%;
    width: 80%;
    max-width: 800px;
    background: #5B5151;
    border-spacing: 4px;
    color: #5B5151;
    float: left;

    td {
      width:20%;
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
