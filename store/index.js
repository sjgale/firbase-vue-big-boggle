import { EventEmitter } from 'events'
import firebase from 'firebase'
import boggle from '../boggle.js'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAqpuOzyVLmCnWOVSKT6OVXnuu97VypBjc",
  authDomain: "boggle-b5205.firebaseapp.com",
  databaseURL: "https://boggle-b5205.firebaseio.com",
  storageBucket: "boggle-b5205.appspot.com",
  messagingSenderId: "790890959102"
};
firebase.initializeApp(config)

const db = firebase.database()
const gameID = 'default'
const store = new EventEmitter()
let boggleData = {}

db.ref().on('value', (snapshot) => {
  var gameData = snapshot.val()
  if (gameData) {
    boggleData = gameData.boggle['default'].sequence
    console.log(boggleData)
    store.emit('data-updated', boggleData)
  }
})

store.setDiceSequence = function () {
  console.log("Set dice sequence update triggered.")

  let boggleData = boggle.returnNewDice()

  //update firebase db, as wel as local state
  db.ref('boggle/' + gameID + '/sequence').set(boggleData)
  store.emit('data-updated', boggleData)
}

export default store
