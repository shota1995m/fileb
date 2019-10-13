import React, { Component } from 'react';

import IndexRouter from './src/router/IndexRouter';

// redux
import {createReduxContainer, createReduxBoundAddListener, createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers';
import {createStore, applyMiddleware} from 'redux';
import {Provider, connect} from 'react-redux';
import reducers from './src/react/reducers';

const middleware = createReactNavigationReduxMiddleware(
  state => state.nav,
);

const ReduxNavigator = createReduxContainer(IndexRouter);
const ReduxRouter = connect(state => {
  return {
    state: state.nav
  }
})(ReduxNavigator);

const store = createStore(
  reducers,
  applyMiddleware(middleware)
);

export default class App extends Component {
  render() {
    return <Provider store={store}>
      <ReduxRouter />
      </Provider>
  }
}
