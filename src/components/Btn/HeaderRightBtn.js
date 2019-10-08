import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { StackActions } from 'react-navigation';

export default class HeaderRightBtn extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const pushAction = StackActions.push({
      routeName: this.props.routeName,
    });

    return <TouchableOpacity onPress={() => this.props.navigation.dispatch(pushAction)}>
        <Text>{ this.props.text }</Text>
      </TouchableOpacity>
  }
}
