import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Game } from '../component';

const routeConfig = {
  GameScreen: { screen: Game }
};

const defaultConfig = {
  navigationOptions: ({navigation}) => ({
    headerLeft: <Text style={styles.text} onPress={() => navigation.navigate('DrawerOpen')}>Menu</Text>,
    title: 'Minesweeper'
  })
};

const styles = StyleSheet.create({
  text: {
    color: '#007AFF',
    marginLeft: 8
  }
});

const GameStack = StackNavigator(routeConfig, defaultConfig);

export default GameStack;