import { combineReducers, createStore } from 'redux';
import gameStateReducer from './reducers/gameStateReducer/gameStateReducer';
//import navigationReducer from './reducers/navigationReducer/navigationReducer';

export default function configureStore(initialState) {
  const rootReducer = gameStateReducer;
  //const rootReducer = combineReducers({
  //  gameState: gameStateReducer,
  //  navigationState: navigationReducer
  //});

  const store = createStore(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('./reducers/gameStateReducer/gameStateReducer');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}