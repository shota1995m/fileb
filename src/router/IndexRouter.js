import React, { Component } from 'react';
import {
  Router,
  Stack,
  Scene,
  Actions
} from 'react-native-router-flux';

import NavBar from '../components/Layout/NavBar';
import Top from '../pages/Top';
import AddServer from '../pages/AddServer';

export default Actions.create(
    <Scene key="root" navBar={NavBar} >
      <Scene key="top" component={Top} title="File" onRight={() => Actions.add_server()} rightTitle="追加" />
      <Scene key="add_server" component={AddServer} title="アクセス情報を追加" />
    </Scene>
)
