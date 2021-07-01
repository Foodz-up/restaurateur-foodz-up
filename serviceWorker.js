function getStartToken () {
  messaging.getToken().then((currentToken) => {
    if (currentToken) {
      sendTokenToServer(currentToken)
    } else {
      // Show permission request.
      RequestPermission()
      setTokenSentToServer(false)
    }
  }).catch((err) => {
    setTokenSentToServer(false)
    console.log(err)
  })
}

function RequestPermission () {
  messaging.requestPermission().then((permission) => {
    if (permission === 'granted') {
      console.log('have Permission')
      // calls method again and to sent token to server
      getStartToken()
    } else {
      console.log('Permission Denied')
    }
  }).catch((err) => {
    console.log(err)
  })
}
function sendTokenToServer (token) {
  if (!isTokensendTokenToServer()) {
    $.ajax({
      url: URL,
      type: 'POST',
      data: {
        // whatever you wanna send
        push_token: token
      },
      success (response) {
        setTokenSentToServer(true)
        console.log(response)
      },
      error (err) {
        setTokenSentToServer(false)
        console.log(err)
      }
    })
  }
}
function isTokensendTokenToServer () {
  return window.localStorage.getItem('sendTokenToServer') === '1'
}
function setTokenSentToServer (sent) {
  window.localStorage.setItem('sendTokenToServer', sent ? '1' : '0')
}
