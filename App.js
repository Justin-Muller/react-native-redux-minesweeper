import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
//import AppWithNavigationState from './navigator/AppNavigator';
import configureStore from './configureStore';
import Game from './component/Game/Game';

class App extends Component {
  store = configureStore();

  render() {
    return (
      <Provider store={this.store}>
        <Game />
      </Provider>
    );
    //<AppWithNavigationState />
  }
}

AppRegistry.registerComponent('App', () => App);

module.exports = App;