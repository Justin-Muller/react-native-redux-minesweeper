import React from 'react';
import PropTypes from 'prop-types';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import StorybookUI from '../storybook';
import GameScreen from '../component/GameScreen/GameScreen';

const AppRouteConfigs = {
  Game: { screen: GameScreen },
  Storybook: { screen: StorybookUI }
};

export const AppNavigator = StackNavigator(AppRouteConfigs);

const AppWithNavigationState = ({ dispatch, navigation }) => (
  <AppNavigator navigation={ addNavigationHelpers({ dispatch, state: navigation })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  navigation: state.navigation
});

export default connect(mapStateToProps)(AppWithNavigationState);