import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

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
       onPress={(event) => onPress({event, id})}
       onLongPress={(event) => onLongPress({event, id})}>
      <View style={style.View}>
        <Text style={style.Text}>{displayValue}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
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
    color: '#3CB371'
  },

  tileIncorrect: {
    color: '#CD5C5C'
  },

  tileMarked: {
    color: '#FFFF33'
  },

  tileRevealed: {
    color: '#000'
  },

  tileMine: {
    color: '#FF0000'
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
    flex: 1,
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

  tileFlagRevealed: {},

  tileIncorrect: {
    backgroundColor: '#fff',
    opacity: 1
  },

  tileMarked: {

  },

  tileRevealed: {
    backgroundColor: '#fff'
  },

  tileMine: {
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

export default Tile;
