importScripts('https://www.gstatic.com/firebasejs/8.2.7/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.2.7/firebase-messaging.js')

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
const app = firebase.initializeApp({
  apiKey: 'AIzaSyAYabQWHXNLZrHkqCczu8kRTfdctBmfjbY',
  authDomain: 'api-foodz-up.firebaseapp.com',
  projectId: 'api-foodz-up',
  storageBucket: 'api-foodz-up.appspot.com',
  messagingSenderId: '107979851813',
  appId: '1:107979851813:web:5b01f7fbaaf405463797cc',
  measurementId: 'G-KC6S8KBN97'

})

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = app.messaging()

messaging.getToken({ vapidKey: 'BPLXYryJq4yqSL4c0lWshfI2XgyRvfez3_uAJ4Ik3hy8gLfBIehSC-uZHowWfRk_VyBzNadRLJjc8V8OI-27jOk' })

messaging.onBackgroundMessage(function (payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload)
  // Customize notification here
  const notificationTitle = 'Background Message Title'
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  }

  self.registration.showNotification(notificationTitle,
    notificationOptions)
})
