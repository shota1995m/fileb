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
      error: '',
      val: {
        name: '',
        key: '',
        secret: '',
        region: '',
      }
    }

    this.connectionSave = this.connectionSave.bind(this)
    this.validation = this.validation.bind(this)
    this.setVal = this.setVal.bind(this)
  }

  async validation() {
    this.setState({error: ""})
    let keys = [];
    console.warn(this.state.val)
    
    await Object.keys(this.state.val).map((v,k) => {
      const val = this.state.val[v]
      console.warn(val)
      if (val == "") {
        keys.push(v)
      }
    })

    console.warn(keys, keys.length)

    if (keys.length) {
      this.setState({ error: `${keys.join(',')}が入力されていません`});
      throw new Error('validation error')
    }

    return;

  }

  async connectionSave() {
    try {
      await this.validation()
      await this.props.addConnection(this.state.val)
      this.props.navigation.goBack(null)
    } catch(err) {
      console.warn(err)
    }
  }

  setVal(k, v) {
    this.setState({
      val: {
        ...this.state.val,
        [k]: v
      }
    })
  }

  render() {
    return <View style={ Style.Common.Content }>
      <Text style={Style.Form.Text}>アクセス情報を入力してください</Text>
        { (this.state.error != "") && <Text>{this.state.error}</Text> }
        <View style={{ marginBottom: 16 }}>
          <Wrap label="表示名">
            <Input onChangeText={text => this.setVal('name', text)} autoFocus={true} />
          </Wrap>
          <Wrap label="Key">
            <Input onChangeText={text => this.setVal('key', text)} />
          </Wrap>
          <Wrap label="Secret">
            <Input onChangeText={text => this.setVal('secret', text)} />
          </Wrap>
          <Wrap label="Region">
            <Input onChangeText={text => this.setVal('region', text)} />
          </Wrap>
        </View>
        <Btn text="アクセス情報を保存" onPress={this.connectionSave} />
      </View>
  }
}
