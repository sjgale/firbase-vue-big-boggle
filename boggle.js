var boggle = {}

boggle.smallDice = [
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

boggle.dice = [
  ['A', 'A', 'A', 'F', 'R', 'S'],
  ['A', 'A', 'E', 'E', 'E', 'E'],
  ['A', 'A', 'F', 'I', 'R', 'S'],
  ['A', 'D', 'E', 'N', 'N', 'N'],
  ['A', 'E', 'E', 'E', 'E', 'M'],
  ['A', 'E', 'E', 'G', 'M', 'U'],
  ['A', 'E', 'G', 'M', 'N', 'N'],
  ['A', 'F', 'I', 'R', 'S', 'Y'],
  ['B', 'J', 'K', 'Qu', 'X', 'Z'],
  ['C', 'C', 'N', 'S', 'T', 'W'],
  ['C', 'E', 'I', 'I', 'L', 'T'],
  ['C', 'E', 'I', 'L', 'P', 'T'],
  ['C', 'E', 'I', 'P', 'S', 'T'],
  ['D', 'H', 'H', 'N', 'O', 'T'],
  ['D', 'H', 'H', 'L', 'O', 'R'],
  ['D', 'H', 'L', 'N', 'O', 'R'],
  ['D', 'D', 'L', 'N', 'O', 'R'],
  ['E', 'I', 'I', 'I', 'T', 'T'],
  ['E', 'M', 'O', 'T', 'T', 'T'],
  ['E', 'N', 'S', 'S', 'S', 'U'],
  ['F', 'I', 'P', 'R', 'S', 'Y'],
  ['G', 'O', 'R', 'R', 'V', 'W'],
  ['H', 'I', 'P', 'R', 'R', 'Y'],
  ['N', 'O', 'O', 'T', 'U', 'W'],
  ['O', 'O', 'O', 'T', 'T', 'U']
]

boggle.rollDice = function (currentDice) {
  let side = Math.floor(Math.random() * 6)
  return currentDice[side]
}

boggle.shuffleDice = function (diceArray) {
  var currentIndex = diceArray.length,
      temporaryValue,
      randomIndex

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
  let rows = [[],[],[],[],[]]

  dice.forEach(function (current, index) {
    let destinationRow = Math.floor(index/5)
    rows[destinationRow].push(current)
  })

  return rows
}

boggle.returnNewDice = function () {
  var dice = this.dice,
      randomizedDice = dice.map(function (currentElement) { return boggle.rollDice(currentElement) })
      this.shuffleDice(randomizedDice)

  return this.organizeDice(randomizedDice)
}

export default boggle
