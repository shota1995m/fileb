import IndexRouter from '~/router/IndexRouter';

//現在のページのstateを取得
const navState = IndexRouter.router.getStateForAction(IndexRouter.router.getActionForPathAndParams('top'));

const NavReducer = (state = navState, action) => {
  const nextState = IndexRouter.router.getStateForAction(action,state);
  return nextState || state;
};

export default NavReducer
