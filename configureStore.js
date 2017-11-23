import { combineReducers, createStore } from 'redux';
import devToolsEnhancer from 'remote-redux-devtools';
import gameStateReducer from './reducers/gameStateReducer/gameStateReducer';
import navigationReducer from './reducers/navigationReducer/navigationReducer';

export default function configureStore(initialState) {
  const rootReducer = combineReducers({
    gameState: gameStateReducer,
    navigationState: navigationReducer
  });

  return createStore(rootReducer, initialState, devToolsEnhancer());
}