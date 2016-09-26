import firebase from 'firebase'

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

export default db
