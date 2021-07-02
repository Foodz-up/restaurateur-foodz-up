import firebase from 'firebase/app'
import 'firebase/firebase-messaging'

firebase.initializeApp({
  apiKey: 'AIzaSyAYabQWHXNLZrHkqCczu8kRTfdctBmfjbY',
  authDomain: 'api-foodz-up.firebaseapp.com',
  projectId: 'api-foodz-up',
  storageBucket: 'api-foodz-up.appspot.com',
  messagingSenderId: '107979851813',
  appId: '1:107979851813:web:5b01f7fbaaf405463797cc',
  measurementId: 'G-KC6S8KBN97'

})

export default firebase.messaging()
