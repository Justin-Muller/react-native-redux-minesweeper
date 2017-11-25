import React from 'react';
import { StyleSheet, View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { Tile } from '../';

const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },

  zoomed: {
    transform: [{ scale: 2 }]
  }
});

storiesOf('Tile', module)
  .addDecorator(getStory => (
    <View style={styles.view}>{getStory()}</View>
  ))
  .add('unrevealed', () => (
    <Tile />
  ))
  .add('unrevealed with a flag', () => (
    <Tile flagged={true} />
  ))
  .add('unrevealed with a mark', () => (
    <Tile marked={true} />
  ))
  .add('revealed', () => (
    <Tile visible={true} />
  ))
  .add('revealed with a value', () => (
    <Tile value={3} visible={true} />
  ))
  .add('revealed with a mine', () => (
    <Tile mine={true} visible={true} />
  ))
  .add('revealed with a flag', () => (
    <Tile flagged={true} visible={true} />
  ))
  .add('revealed with a flag incorrectly', () => (
    <Tile incorrect={true} visible={true} />
  ));
