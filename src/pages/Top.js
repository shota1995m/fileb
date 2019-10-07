import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Style from 'style/index';

export default class Top extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <View style={ Style.Common.Content }>
        <Text style={Style.LabelStyle}>Top</Text>
      </View>
  }
}
