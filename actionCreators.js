import {
  GAME_FINISHED,
  GAME_INIT,
  TILE_LONG_PRESS,
  TILE_PRESS
} from './actionTypes';

export const
  gameInit = () => {
    return {
      type: GAME_INIT
    };
  },

  gameFinished = () => {
    return {
      type: GAME_FINISHED
    };
  },

  tileLongPress = (id) => {
    return {
      type: TILE_LONG_PRESS,
      id
    };
  },

  tilePress = (id) => {
    return {
      type: TILE_PRESS,
      id
    };
  };