import React, { Component } from 'react';

import IndexRouter from './src/router/IndexRouter';

// redux
import {createReduxContainer, createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider, connect} from 'react-redux';
import {Router} from 'react-native-router-flux';
import reducers from './src/react/reducers';

const initialState = IndexRouter.router.getStateForAction(IndexRouter.router.getActionForPathAndParams('top'));
const navReducer = (state = initialState, action) => {
  const nextState = IndexRouter.router.getStateForAction(action, state);
  console.log('nextState : ', nextState);
  return nextState || state;
};

const middleware = createReactNavigationReduxMiddleware('root', state => state.nav);
const ReduxNavigator = createReduxContainer(IndexRouter, 'root');
const ReduxRouter = connect(state => {
  return {
    state: state.nav
  }
})(Router);
const store = createStore(
  combineReducers({
    nav: navReducer,
    ...reducers,
  }),
  applyMiddleware(middleware)
);

export default class App extends Component {
  render() {
    return <Provider store={store}>
      <ReduxRouter navigator={ReduxNavigator} />
      </Provider>
  }
}
