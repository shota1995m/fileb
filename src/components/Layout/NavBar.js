import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import { Feather } from '@expo/vector-icons';

import Style from 'style/index';

export default class NavBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { navigation, scene, previous } = this.props;
    const { options } = scene.descriptor;
    const title =
      options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.routeName;

    return <View style={ Style.NavBarStyle.Wrap }>
        <StatusBar barStyle="dark-content" />
        <View style={ Style.NavBarStyle.StatusBar } />
        <View style={ Style.NavBarStyle.Inner }>
          <View style={ Style.NavBarStyle.Left }>
            { (scene.index > 0) && <TouchableOpacity onPress={() => navigation.goBack(null)} >
              <Feather name="arrow-left" size={20} />
            </TouchableOpacity>}
          </View>

          <View style={ Style.NavBarStyle.Center }>
            <Text style={ Style.NavBarStyle.Text }>{ title }</Text>
          </View>

          <View style={ Style.NavBarStyle.Right }>
            { options.headerRight && options.headerRight}
          </View>
        </View>
      </View>
  }
}
