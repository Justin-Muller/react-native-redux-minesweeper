import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
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

    const style = StyleSheet.flatten([{
        width: (tileSize * (columnLength + 2))  // + 2 is for padding left + right.
    }, styles.board]);

    return <ScrollView contentContainerStyle={style} maximumZoomScale={2}>
        <View style={styles.container}>{rows}</View>
    </ScrollView>;
};

const styles = StyleSheet.create({
    board: {
        paddingLeft: 44,
        paddingVertical: 44
    },

    container: {
        marginRight: 100
    },

    row: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#000',
        display: 'inline-block',
        //whiteSpace: 'nowrap',

    }
});

export default TileList;