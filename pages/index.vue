<template>
  <div class="m-4">
    Salut
  </div>
</template>

<script>
include('https://www.gstatic.com/firebasejs/8.6.8/firebase-app.js')
include('../serviceWorker.js')

const firebaseConfig = {
  apiKey: 'AIzaSyAYabQWHXNLZrHkqCczu8kRTfdctBmfjbY',
  authDomain: 'api-foodz-up.firebaseapp.com',
  projectId: 'api-foodz-up',
  storageBucket: 'api-foodz-up.appspot.com',
  messagingSenderId: '107979851813',
  appId: '1:107979851813:web:5b01f7fbaaf405463797cc',
  measurementId: 'G-KC6S8KBN97'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default
{
  mounted: {
    startMessaging () {
      const messaging = firebase.messaging()
      getStartToken()
      messaging.onMessage(function (payload) {
        console.log('on Message', payload)
      })
    }
  }
}
</script>

<style scoped>

</style>
