import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { StackActions } from 'react-navigation';

export default class HeaderRightBtn extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <TouchableOpacity onPress={() => this.props.send(this.props.routeName)}>
        <Text>{ this.props.text }</Text>
      </TouchableOpacity>
  }
}
