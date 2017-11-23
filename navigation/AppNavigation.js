import React from 'react';
import PropTypes from 'prop-types';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import { DrawerNavigator } from 'react-navigation';
import { connect } from 'react-redux';

import GameStack from './GameStack';
import StorybookUI from '../storybook';

const appRouteConfig = {
  GameStack: { screen: GameStack },
  Storybook: { screen: StorybookUI }
};

export const AppNavigation = DrawerNavigator(appRouteConfig);

const AppWithNavigationState = ({ dispatch, navigationState }) => (
  <AppNavigation navigation={ addNavigationHelpers({ dispatch, state: navigationState })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigationState: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  navigationState: state.navigationState
});

export default connect(mapStateToProps)(AppWithNavigationState);