import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Tile } from './Tile';

storiesOf('Tile', module)
  .add('unrevealed', () => {
    <Tile
      visible="{false}"
      />
  })