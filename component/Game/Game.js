import React from 'react';
import { View } from 'react-native';
import GameOverConfirmContainer from '../../container/GameOverConfirmContainer/GameOverConfirmContainer';
import TileListContainer from '../../container/TileListContainer/TileListContainer';

const Game = (props) => {
    return (
        <View>
          <TileListContainer />
        </View>
    );
  //<GameOverConfirmContainer />
};

export default Game;