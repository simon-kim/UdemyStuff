import React, { Component } from 'react'
import { Text } from 'react-native'
import Firebase from 'firebase'
import { Card, CardSection, Button, Input, Spinner } from './common'

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false }

  onButtonPress() {
    const { email, password } = this.state

    this.setState({ loading: true, error: '' })

    Firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        Firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this))
      })
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: '',
    })
  }

  onLoginFail() {
    this.setState({
      error: 'Incorrect Password.',
      loading: false,
    })
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />
    } 

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Log In
      </Button>
    )
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="example@email.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            placeholder="password123"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <Text style={styles.errorStyle}>
          {this.state.error}
        </Text>

        <CardSection>
        {this.renderButton()}
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  errorStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
}

export default LoginForm
