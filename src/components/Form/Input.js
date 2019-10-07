import React, { Component } from 'react';
import { TextInput } from 'react-native';

import Style from 'style/index';

export default class Input extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <TextInput
        style={Style.InputStyle}
        {...this.props}
      />
  }
}
