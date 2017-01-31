import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import Firebase from 'firebase'
import Reducers from './reducers'
import Router from './router'

class App extends Component {
  componentWillMount() {
    Firebase.initializeApp({
      apiKey: 'AIzaSyB2TKF03Y8CZmf0MMWsQtUJp0UZ-Xjz5i8',
      authDomain: 'manager-9d075.firebaseapp.com',
      databaseURL: 'https://manager-9d075.firebaseio.com',
      storageBucket: 'manager-9d075.appspot.com',
      messagingSenderId: '805692910455',
    })
  }

  render() {
    const store = createStore(Reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

export default App
