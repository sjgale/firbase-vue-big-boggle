var boggle = {}

boggle.dice = [
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

boggle.shuffleDice = function (diceArray) {
  var currentIndex = diceArray.length, temporaryValue, randomIndex

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = diceArray[currentIndex]
    diceArray[currentIndex] = diceArray[randomIndex]
    diceArray[randomIndex] = temporaryValue
  }

  return diceArray
}

boggle.organizeDice = function (dice) {
  let rows = [[],[],[],[]]

  dice.forEach(function (current, index) {
    let destinationRow = Math.floor(index/4)
    rows[destinationRow].push(current)
  })

  return rows
}

boggle.rollDice = function (currentDice) {
  let side = Math.floor(Math.random(1, 7));
  return currentDice[side];
}

boggle.returnNewDice = function () {
  var dice = this.dice

  return this.organizeDice(this.shuffleDice(dice.map(function (currentDice) {
    return boggle.rollDice(currentDice)
  })))
}

export default boggle
