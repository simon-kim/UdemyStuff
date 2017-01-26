import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import Firebase from 'firebase'
import Reducers from './reducers'
import LoginForm from './components/loginForm'

class App extends Component {
  componentWillMount() {
    Firebase.initializeApp(config)
  }

  render() {
    const store = createStore(Reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    )
  }
}

export default App
