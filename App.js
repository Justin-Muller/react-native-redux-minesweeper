import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import Game from './component/Game/Game';
//import AppWithNavigationState from './navigator/AppNavigator';
import configureStore from './configureStore';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Game />
      </Provider>
    );
    //<AppWithNavigationState />
  }
}

AppRegistry.registerComponent('App', () => App);

module.exports = App;