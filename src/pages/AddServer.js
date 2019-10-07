import React, { Component } from 'react';
import { Text, View } from 'react-native';

import Style from 'style/index';

import Wrap from '~/components/Form/Wrap'
import Input from '~/components/Form/Input'
import Btn from '~/components/Form/Btn'

export default class AddServer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      key: '',
      secret: '',
      region: '',
    }
  }

  connectionSave() {
    this.props.addConnection(this.state)
  }

  render() {
    return <View style={ Style.Common.Content }>
      <Text style={Style.Form.Text}>アクセス情報を入力してください</Text>
        <View style={{ marginBottom: 16 }}>
          <Wrap label="表示名">
            <Input onChangeText={text => this.setState({name: text})} autoFocus={true} />
          </Wrap>
          <Wrap label="Key">
            <Input onChangeText={text => this.setState({secret: text})} />
          </Wrap>
          <Wrap label="Secret">
            <Input onChangeText={text => this.setState({secret: text})} />
          </Wrap>
          <Wrap label="Region">
            <Input onChangeText={text => this.setState({region: text})} />
          </Wrap>
        </View>
        <Btn text="アクセス情報を保存" />
      </View>
  }
}
