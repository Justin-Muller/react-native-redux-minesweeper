import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { tileLongPress, tilePress } from '../../actionCreators';


/**
 * The tile can contain either a mine, a number (value), a flag (flagged), a question mark (marked) or blank (value = 0). The tile will initially be invisible (visible = false) until the user has clicked on the tile to reveal a value or mine.
 * @component Tile
 * @param {Object}   props
 * @param {Boolean}  props.disabled - Disables the tile by greying out tile. Note: Does not stop click event from propagating.
 * @param {Boolean}  props.flagged - Displays a flag icon in the tile.
 * @param {Boolean}  props.incorrect - Displays a mine icons with a cross in the tile.
 * @param {Boolean}  props.marked - Displays a question mark in the tile.
 * @param {Boolean}  props.mine - Only displays mine when visible flag is true.
 * @param {Function} props.onPress - Click/Touch handler called when tile has left click/touch is released.
 * @param {Function} props.onLongPress - Click/Touch handler called when tile is right clicked.
 * @param {Number}   props.value - Only displays value when visible flag is true.
 * @param {Boolean}  props.visible - Visible flag to show/hide the value or mine in the tile.
 * @returns {DOMElement}
 */
const Tile = (props) => {
  const { id, onPress, onLongPress } = props;
  const displayValue = getTileDisplayValue(props);
  const style = getTileStyle(props);

  return (
    <TouchableWithoutFeedback
      onPress={() => onPress(id)}
      onLongPress={() => onLongPress(id)}>
      <View style={style.View}>
        <Text style={style.Text}>{displayValue}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

Tile.propTypes = {
  disabled: PropTypes.bool,
  flagged: PropTypes.bool,
  incorrect: PropTypes.bool,
  marked: PropTypes.bool,
  mine: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
  onLongPress: PropTypes.func.isRequired,
  value: PropTypes.number,
  visible: PropTypes.bool
};

const getTileDisplayValue = (props) => {
  const { flagged, incorrect, marked, mine, value, visible } = props;

  if (incorrect) {
    return '\u2715';
  }

  if (flagged) {
    return '\u2691';
  }

  if (visible) {
    if (mine) {
      return '\u2739';
    }

    if (value) {
      return value;
    }
  }

  if (marked) {
    return '?';
  }

  return '\u00A0';
};

const getTileStyle = (props) => {
  const textStyleList = [textStyles.tile];
  const viewStyleList = [viewStyles.tile];
  const { disabled, flagged, incorrect, marked, mine, visible } = props;

  //TODO - Clean this part of the code up.

  if (disabled) {
    textStyleList.push(textStyles.tileDisabled);
    viewStyleList.push(viewStyles.tileDisabled);
  }

  if (incorrect) {
    textStyleList.push(textStyles.tileIncorrect);
    viewStyleList.push(viewStyles.tileIncorrect);
  } else if (flagged) {
    textStyleList.push(textStyles.tileFlag);
    viewStyleList.push(viewStyles.tileFlag);

    if (visible) {
      textStyleList.push(textStyles.tileFlagRevealed);
      viewStyleList.push(viewStyles.tileFlagRevealed);
    }
  } else if (marked) {
    textStyleList.push(textStyles.tileMarked);
    viewStyleList.push(viewStyles.tileMarked);
  } else if (visible) {
    textStyleList.push(textStyles.tileRevealed);
    viewStyleList.push(viewStyles.tileRevealed);
    if (mine && !flagged) {
      textStyleList.push(textStyles.tileMine);
      viewStyleList.push(viewStyles.tileMine);
    }
  }

  return {
    Text: StyleSheet.flatten(textStyleList),
    View: StyleSheet.flatten(viewStyleList)
  };
};

const textStyles = StyleSheet.create({
  tile: {
    fontSize: 20,
    fontWeight: 'bold'
  },

  tileDisabled: {},

  tileFlag: {
    color: '#FF8000'
  },

  tileFlagRevealed: {
    color: '#009900'
  },

  tileIncorrect: {
    color: '#fff'
  },

  tileMarked: {
    color: '#FFFF33'
  },

  tileRevealed: {
    color: '#000'
  },

  tileMine: {
    color: '#fff'
  }

  //TODO - Learn animation in react native.
  /*
  .tile.tile-flag {
    animation: placeFlag 300ms forwards;
  }
  */

  /** Allow for theming options **/

  //TODO
});

const viewStyles = StyleSheet.create({
  tile: {
    alignItems: 'center',
    backgroundColor: '#000',
    borderColor: '#999',
    borderWidth: 1,
    //flex: 1,
    height: 44,
    justifyContent: 'center',
    width: 44
  },

  tileDisabled: {
    opacity: 0.2
  },

  tileFlag: {
    opacity: 1
  },

  tileFlagRevealed: {
    backgroundColor: '#00ffcc'
  },

  tileIncorrect: {
    backgroundColor: '#cc0033',
    opacity: 1
  },

  tileMarked: {

  },

  tileRevealed: {
    backgroundColor: '#fff'
  },

  tileMine: {
    backgroundColor: '#FF0000',
    opacity: 1
  }


  //TODO - Learn animation in react native.
  /*
  .tile.tile-flag {
    animation: placeFlag 300ms forwards;
  }
  */

  /** Allow for theming options **/

  //TODO
});

const mapStateToProps = (state) => {
  const { gameOver, tileSize } = state;
  return {
    disabled: gameOver,
    tileSize
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLongPress: (id) => {
      dispatch(tileLongPress(id));
    },

    onPress: (id) => {
      dispatch(tilePress(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tile);
