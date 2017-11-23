import React from 'react';
import PropTypes from 'prop-types';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import StorybookUI from '../storybook';
import GameScreen from '../component/GameScreen/GameScreen';

console.log('here???');

const AppRouteConfigs = {
  Game: { screen: GameScreen },
  Storybook: { screen: StorybookUI }
};

export const AppNavigator = StackNavigator(AppRouteConfigs);

const AppWithNavigationState = ({ dispatch, navigationState }) => (
  <AppNavigator navigation={ addNavigationHelpers({ dispatch, state: navigationState })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigationState: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  navigationState: state.navigationState
});

export default connect(mapStateToProps)(AppWithNavigationState);