import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Feather } from '@expo/vector-icons';

import Style from 'style/index';

export default class NavBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const props = this.props;

    return <View style={ Style.NavBarStyle.Wrap }>
        <StatusBar barStyle="dark-content" />
        <View style={ Style.NavBarStyle.StatusBar } />
        <View style={ Style.NavBarStyle.Inner }>
          <View style={ Style.NavBarStyle.Left }>
            <TouchableOpacity onPress={Actions.pop} >
              { props.hideBackImage ? null : (<Feather name="arrow-left" size={20} />) }
            </TouchableOpacity>
          </View>

          <View style={ Style.NavBarStyle.Center }>
            <Text style={ Style.NavBarStyle.Text }>{props.title}</Text>
          </View>

          <View style={ Style.NavBarStyle.Right }>
            <TouchableOpacity onPress={props.onRight}>
              <Text>{ props.rightTitle }</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
  }
}
