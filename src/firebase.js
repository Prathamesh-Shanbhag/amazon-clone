import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyDuwk-u1KRupawmIuuAUxpfhGc27GMFA34',
  authDomain: 'clone-5757a.firebaseapp.com',
  databaseURL: 'https://clone-5757a.firebaseio.com',
  projectId: 'clone-5757a',
  storageBucket: 'clone-5757a.appspot.com',
  messagingSenderId: '423104591755',
  appId: '1:423104591755:web:595aa47e1753dc62cb618e',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }
