import {connect} from 'react-redux';
import actions from '%/actions';

import _Top from './Top';
export const Top = connect(state => {
    return {
      connections: state.connection.data
    }
}, (dispatch) => {
    return {}
})(_Top);

import _AddServer from './AddServer';
export const AddServer = connect(state => {
    return {}
}, (dispatch) => {
    return {
      addConnection: (data) => {
        dispatch(actions.connectionAdd(data))
      }
    }
})(_AddServer);
