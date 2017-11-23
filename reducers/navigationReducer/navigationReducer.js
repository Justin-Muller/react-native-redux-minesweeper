import { AppNavigation } from '../../navigation/AppNavigation';

const navigationReducer = (state, action) => {
  return AppNavigation.router.getStateForAction(action, state) || state;
};

export default navigationReducer;