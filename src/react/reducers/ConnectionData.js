import {handleActions} from 'redux-actions';
import ActionTypes from '../actionTypes';

const template = {
  name: '',
  key: '',
  secret: '',
  region: '',
}

const initialState = {
  data: []
}

export default handleActions({
  [ActionTypes.CONNECTION.ADD]: (state, action) => {
    const data = {
      ...template,
      ...state.payload
    }
    state.push(data)

    return {
      data: state
    };
  },
  [ActionTypes.CONNECTION.EDIT]: (state, action) => {
    return initialState;
  },
  [ActionTypes.CONNECTION.DELETE]: (state, action) => {
    return initialState;
  },
}, initialState)
