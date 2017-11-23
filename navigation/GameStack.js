import React from 'react';
import { Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import GameScreen from '../component/GameScreen/GameScreen';

const routeConfig = {
  GameScreen: { screen: GameScreen }
};

const defaultConfig = {
  navigationOptions: ({navigation}) => ({
    headerLeft: <Text onPress={() => navigation.navigate('DrawerOpen')}>Menu</Text>
  })
};

const GameStack = StackNavigator(routeConfig, defaultConfig);

export default GameStack;