import React from 'react';
import { View } from 'react-native';
import GameOverConfirm from '../GameOverConfirm/GameOverConfirm';
import TileList from '../TileList/TileList';

const Game = (props) => {
    return (
        <View>
          <TileList />
        </View>
    );
  //<GameOverConfirm />
};

export default Game;