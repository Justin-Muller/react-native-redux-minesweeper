import { connect } from 'react-redux';
import Tile from '../../component/Tile/Tile';

const mapStateToProps = (state) => {
    const { gameOver, tileSize } = state;
    return {
        disabled: gameOver,
        tileSize
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLongPress: ({ event, id }) => {
            dispatch({
                type: 'TILE_LONG_PRESS',
                id
            });
        },

        onPress: ({ event, id }) => {
            dispatch({
                type: 'TILE_PRESS',
                id
            });
        }
    };
};

const TileContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Tile);

export default TileContainer;