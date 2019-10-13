import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Style from 'style/index';

export default class Btn extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <TouchableOpacity style={ Style.BtnStyle.Wrap } onPress={ this.props.onPress }>
        <Text style={ Style.BtnStyle.Text }>{ this.props.text }</Text>
      </TouchableOpacity>
  }
}
