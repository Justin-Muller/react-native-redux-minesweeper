import gameFinishedReducer from './gameFinishedReducer/gameFinishedReducer';
import gameInitReducer from './gameInitReducer/gameInitReducer';
import gameStartReducer from './gameStartReducer/gameStartReducer';
import tileAltClickReducer from './tileAltClickReducer/tileAltClickReducer';
import tileClickReducer from './tileClickReducer/tileClickReducer';

/**
 * Update these values manually to change the game's difficulty.
 * Will add a game menu to update these values in the future.
 *
 * @param {object}  defaults - The game's defaults to initialize the board with.
 * @param {number} [defaults.mineLength=20] - How many mines to generate on the board.
 * @param {number} [defaults.columnLength=8] - How many tiles to create on the x-axis.
 * @param {number} [defaults.rowLength=13] - How many tiles to create on the y-axis.
 * @param {number} [defaults.tileSize=44] - How big the tiles are in pixels.
 */
const defaults = {
    mineLength: 4,
    columnLength: 5,
    rowLength: 5,
    tileSize: 44
};

const actionTypeMap = {
  GAME_FINISHED: gameFinishedReducer,
  GAME_INIT: gameInitReducer,
  GAME_START: gameStartReducer,
  TILE_LONG_PRESS: tileAltClickReducer,
  TILE_PRESS: tileClickReducer
};

/**
 * @reducer gameStateReducer
 * @param {object}  state
 * @param {number}  state.columnLength        - How many tiles along the X axis the playing area is.
 * @param {Array}   state.flaggedList         -
 * @param {boolean} state.gameOver            -
 * @param {Array}   state.incorrectList       -
 * @param {boolean} state.initialised         -
 * @param {Array}   state.markedList          -
 * @param {number}  state.mineLength          - How many mines to generate within the playing area.
 * @param {Array}   state.mineList            -
 * @param {number}  state.rowLength           - How many tiles along the Y axis the playing area is.
 * @param {boolean} state.showGameOverMessage -
 * @param {Number}  state.tileSize            - How big the are tiles in pixels.
 * @param {Array}   state.valueList           -
 * @param {Array}   state.visibleList         -
 * @param {boolean} state.win                 -
 * @param {object}  action
 * @param {string}  action.type               - An action for the reducer to handle. Actions = GAME_INIT, GAME_START, TILE_CLICK, TILE_ALT_CLICK
 */
const gameStateReducer = (state, action) => {
    if (typeof state === 'undefined') {
        return gameInitReducer(defaults);
    }

    const actionTypeReducer = actionTypeMap[action.type];

    if (actionTypeReducer) {
        return actionTypeReducer(state, action);
    }

    return state;
};

export default gameStateReducer;