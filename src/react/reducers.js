import { combineReducers } from 'redux';

import NavReducer from './reducers/NavReducer';
import ConnectionData from './reducers/ConnectionData';

export default combineReducers({
  nav: NavReducer,
  connection: ConnectionData,
});
