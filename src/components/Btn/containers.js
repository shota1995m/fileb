import {connect} from 'react-redux'
import { NavigationActions } from 'react-navigation'

import _HeaderRightBtn from './HeaderRightBtn';
export const HeaderRightBtn = connect(state => {
    return {}
}, (dispatch) => {
    return {
      send: (routeName) => {
        dispatch(NavigationActions.navigate({ routeName }))
      }
    }
})(_HeaderRightBtn);
