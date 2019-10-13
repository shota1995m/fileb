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
    return {test: 'ok'}
}, (dispatch) => {
    return {
      addConnection: (data) => {
        return dispatch(actions.connectionAdd(data))
      }
    }
})(_AddServer);
