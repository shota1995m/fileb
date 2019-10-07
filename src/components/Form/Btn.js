import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Style from 'style/index';

export default class Btn extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <View style={ Style.BtnStyle.Wrap }>
        <Text style={ Style.BtnStyle.Text }>{ this.props.text }</Text>
      </View>
  }
}
