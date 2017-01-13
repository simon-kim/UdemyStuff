import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Firebase from 'firebase'
import Reducers from './reducers'
import LoginForm from './components/loginForm'

class App extends Component {
  componentWillMount() {
    Firebase.initializeApp(config)
  }

  render() {
    return (
      <Provider store={createStore(Reducers)}>
        <LoginForm />
      </Provider>
    )
  }
}

export default App
