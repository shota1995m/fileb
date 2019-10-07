import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Style from 'style/index';

import Label from '~/components/Form/Label'

export default class Wrap extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <View style={Style.Common.mb1}>
        <View style={Style.InputWrapStyle}>
          <Label text={this.props.label} />
          {this.props.children}
        </View>
      </View>
  }
}
