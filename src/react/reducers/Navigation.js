import {ActionConst} from 'react-native-router-flux';

const initialState = {
  data: null,
  currentScene: 'main'
};

export default (state = initialState, { type, payload, routeName }) => {
  // console.error(type)
  switch (type) {
    case ActionConst.FOCUS:
      console.log('FOCUS event fired with scene parameter: ', routeName);
      return { ...state, currentScene: routeName };
    case 'data':
      console.error("dat", payload)
      return { ...state, data: payload };
    default:
      return state;
  }
};
