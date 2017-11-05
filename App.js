import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Game from './component/Game/Game';
import configureStore from './configureStore';

class App extends Component {
    render() {
        return (
          <Provider store={configureStore()}>
              <Game />
          </Provider>
        );
    }
}

export default App;
