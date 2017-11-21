import AppNavigator from '../../navigator/AppNavigator';

const initialNavigationState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Game'));

const actionTypeMap = {
  //Game:
};

const navigationReducer = (state = initialNavigationState, action) => {


  const nextState = AppNavigator.router.getStateForAction(action, state);
  return nextState || state;
};

export default navigationReducer;