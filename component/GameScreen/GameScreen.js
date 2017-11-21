import React, { Component }  from 'react';
import Game from '../Game/Game';

class GameScreen extends Component {
  static navigationOptions = {
    title: 'Welcome'
  };

  render() {
    return (
      <Game />
    )
  }
}

export default GameScreen;