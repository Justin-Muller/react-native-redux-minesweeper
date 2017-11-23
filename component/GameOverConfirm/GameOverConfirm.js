import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { gameInit, gameFinished } from '../../actionCreators';

/**
 * Pops up a confirm dialog to the user when the user has won or lost the game.
 * @component GameOverConfirm
 * @param {Object}   props
 * @param {Function} props.onConfirm
 * @param {Boolean}  props.show
 * @param {Boolean}  props.win
 * @returns {DOMElement}
 */
const GameOverConfirm = (props) => {
    const { onCancel, onConfirm, show, win } = props;

    if (show) {
        const messagePrefix = win ? 'You win!' : 'Game Over';
        const message = `${messagePrefix}\n\nWould you like to play again?`;

        //Slight delay to allow board to update before popping up confirm message.
        setTimeout(() => {
            if (window.confirm(message)) {
                onConfirm();
            } else {
                onCancel();
            }
        }, 100);
    }

    return (
        <div></div>
    );
};

GameOverConfirm.propTypes = {
    onConfirm: PropTypes.func.isRequired,
    show: PropTypes.bool,
    win: PropTypes.bool
};

const mapStateToProps = (state) => {
    const { showGameOverMessage, win } = state;

    return {
        show: showGameOverMessage,
        win
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onConfirm: () => {
            dispatch(gameInit());
        },

        onCancel: () => {
            dispatch(gameFinished());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GameOverConfirm);