import {connect} from 'react-redux';

import _NavBar from './NavBar';
export const NavBar = connect(state => {
    return {
      nav: state.nav
    }
}, (dispatch) => {
    return {}
})(_NavBar);
