import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

import Style from 'style/index';

export default class Top extends Component {
  constructor(props) {
    super(props)

    this.state = {
      connections: props.connections
    }
  }

  render() {
    console.warn(this.props.connections)
    return <View style={ Style.Common.Content }>
        <Text style={Style.LabelStyle}>Top</Text>

        <FlatList
          data={this.state.connections}
          renderItem={({item}) => <Text style={{padding: 10,fontSize: 18,height: 44}}>{item.name}</Text>}
        />
      </View>
  }
}
