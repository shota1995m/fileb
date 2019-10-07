import ActionTypes from './actionTypes.js';
import {createActions} from 'redux-actions';

const WorkFlowActions = {
  [ActionTypes.CONNECTION.ADD] : (data) => {
    return data
  },
  [ActionTypes.CONNECTION.EDIT] : (data) => {
    return data
  },
  [ActionTypes.CONNECTION.DELETE] : (data) => {
    return data
  },
}

const ReactRouterFlux = {
  'data' : (val) => {
    return val
  }
}

export default createActions({
  ...ReactRouterFlux,
  ...WorkFlowActions
});
