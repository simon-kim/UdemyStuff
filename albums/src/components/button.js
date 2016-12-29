import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const Button = ({ onPress, children }) => {
  const { buttonStyling, textStyling } = styles

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyling}>
      <Text style={textStyling}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = {
  buttonStyling: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
  },
  textStyling: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 15,
    paddingBottom: 15,
  },
}

export default Button
