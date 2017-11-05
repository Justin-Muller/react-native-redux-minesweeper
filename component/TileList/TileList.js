import React from 'react';
import { StyleSheet, View } from 'react-native';
import TileContainer from '../../container/TileContainer/TileContainer';

const renderTile = (props, id) => {
    const { flaggedList, incorrectList, markedList, mineList, valueList, visibleList } = props;

    return (
        <TileContainer
            flagged={flaggedList[id]}
            id={id}
            incorrect={incorrectList[id]}
            key={id}
            marked={markedList[id]}
            mine={mineList[id]}
            value={valueList[id]}
            visible={visibleList[id]}
        />);
};

const renderRow = (props, rowIndex) => {
    const { columnLength } = props;
    let tiles = [];

    for (let columnIndex = 0; columnIndex < columnLength; columnIndex++) {
        let id = columnIndex + (rowIndex * columnLength);
        tiles.push(renderTile(props, id));
    }

    return (<View style={styles.row} key={rowIndex}>{tiles}</View>);
};

const renderRows = (props) => {
    const { rowLength } = props;

    let rows = [];

    for (let rowIndex = 0; rowIndex < rowLength; rowIndex++) {
    rows.push(renderRow(props, rowIndex));
}

    return rows;
};

const TileList = (props) => {
    const rows = renderRows(props);
    const { columnLength, tileSize } = props;

    const style = {
        margin: styles.board.margin,    //TODO - Figure out best way to copy styles over
        width: tileSize * columnLength
    };

    return <View style={style}>{rows}</View>;
};

const styles = StyleSheet.create({
    board: {
        marginVertical: 44
    },

    row: {
        backgroundColor: '#000',
        display: 'inline-block',
        //whiteSpace: 'nowrap',
        marginHorizontal: 44
    }
});

export default TileList;