export default store => {
  return next => {
    return action => {
      return next(action);
    }
  }
}
