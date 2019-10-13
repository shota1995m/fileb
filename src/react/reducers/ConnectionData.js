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
    let stateData = state.data;
    const data = {
      ...template,
      ...action.payload
    }
    stateData.push(data)

    return {
      data: stateData
    };
  },
  [ActionTypes.CONNECTION.EDIT]: (state, action) => {
    return initialState;
  },
  [ActionTypes.CONNECTION.DELETE]: (state, action) => {
    return initialState;
  },
}, initialState)
