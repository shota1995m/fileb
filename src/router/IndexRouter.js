import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import { NavBar } from '../components/Layout/containers'
import { Top, AddServer } from '../pages/containers'
import { HeaderRightBtn } from '../components/Btn/containers'

const Root = createStackNavigator(
  {
    top: {
      screen: Top,
      navigationOptions: ({ navigation }) => {
        return {
        title: "トップ",
        headerRight: <HeaderRightBtn
        routeName="add_server"
        text="追加"
        navigation={navigation} />,
      }}
    },
    add_server: {
      screen: AddServer,
      navigationOptions: {
        title: "サーバー追加"
      }
    },
  },
  {
    defaultNavigationOptions: {
      header: ({ scene, previous, navigation }) => {
        return <NavBar navigation={navigation} scene={scene} previous={previous} />
      },
    }
  }
)

export default createAppContainer(Root)
