<template lang="html">
  <table>
    <tr v-for="row in diceSequence">
      <td v-for="column in row">
        <div class="content">
          <div class="center-letter">{{ column }}</div>
        </div>
      </td>
    </tr>
  </table>
</template>

<script>

  export default {
    data () {
      return {
        dice: [
          ['A', 'E', 'A', 'N', 'E', 'G'],
          ['A', 'H', 'S', 'P', 'C', 'O'],
          ['A', 'S', 'P', 'F', 'F', 'K'],
          ['O', 'B', 'J', 'O', 'A', 'B'],
          ['I', 'O', 'T', 'M', 'U', 'C'],
          ['R', 'Y', 'V', 'D', 'E', 'L'],
          ['L', 'R', 'E', 'I', 'X', 'D'],
          ['E', 'I', 'U', 'N', 'E', 'S'],
          ['W', 'N', 'G', 'E', 'E', 'H'],
          ['L', 'N', 'H', 'N', 'R', 'Z'],
          ['T', 'S', 'T', 'I', 'Y', 'D'],
          ['O', 'W', 'T', 'O', 'A', 'T'],
          ['E', 'R', 'T', 'T', 'Y', 'L'],
          ['T', 'O', 'E', 'S', 'S', 'I'],
          ['T', 'E', 'R', 'W', 'H', 'V'],
          ['N', 'U', 'I', 'H', 'M', 'Qu']
        ]
      }
    },
    computed: {
      diceSequence () {
        return this.reRoll()
        console.log('diceSequecing finished!')
      }
    },
    methods: {
      shuffleDice (array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;

          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }

        return array;
      },
      rollDice (currentDice) {
        let side = Math.floor(Math.random(1, 7));
        return currentDice[side];
      },
      organizeDice (dice) {
        console.log(dice)
        let rows = [[],[],[],[]]

        dice.forEach(function (current, index) {
          let destinationRow = Math.floor(index/4)
          rows[destinationRow].push(current)
        })

        return rows
      },
      reRoll () {
        let dice = this.shuffleDice(this.dice.map(this.rollDice))
        return this.organizeDice(dice)
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
