import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import AppWithNavigationState from './navigation/AppNavigation';
import configureStore from './configureStore';
import Game from './component/Game/Game';

class App extends Component {
  store = configureStore();

  render() {
    return (
      <Provider store={this.store}>
        <AppWithNavigationState />
      </Provider>
    );

    //<Game />
  }
}

AppRegistry.registerComponent('App', () => App);

module.exports = App;