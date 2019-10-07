import React, { Component } from 'react';
import { Text } from 'react-native';

import Style from 'style/index';

export default class Label extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <Text style={Style.LabelStyle}>{ this.props.text }</Text>
  }
}
