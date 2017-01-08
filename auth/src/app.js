import React, { Component } from 'react'
import { View } from 'react-native'
import Firebase from 'firebase'
import { Header, Button, Spinner } from './components/common'
import LoginForm from './components/loginForm'

class App extends Component {
  state = { loggedIn: null }

  componentWillMount() {
    Firebase.initializeApp({
      apiKey: 'apiKey',
      authDomain: 'domain.firebaseapp.com',
      databaseURL: 'databaseURL.firebaseio.com',
      storageBucket: 'bucket.appspot.com',
      messagingSenderId: 'senderId',
    });

    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    })
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View style={{ flexDirection: 'row' }}>
            <Button onPress={() => Firebase.auth().signOut()}>
              Log Out
            </Button>
          </View>
        )
      case false:
        return <LoginForm />
      default:
        return <Spinner size="large" />
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    )
  }
}

export default App
