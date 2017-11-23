import AppNavigator from '../../navigator/AppNavigator';

console.log('router = ', AppNavigator.router);

const initialAction = AppNavigator.router.getActionForPathAndParams('Game');

console.log('initialAction = ', initialAction);

const initialNavigationState = AppNavigator.router.getStateForAction(initialAction);

const actionTypeMap = {
  //Game:
};

const navigationReducer = (state = initialNavigationState, action) => {
  //const nextState = AppNavigator.router.getStateForAction(action, state);
  //return nextState || state;
  return state;
};

export default navigationReducer;