import { combineReducers, createStore } from 'redux';
import gameStateReducer from './reducers/gameStateReducer/gameStateReducer';
import storybookReducer from './reducers/storybookReducer/storybookReducer';

export default function configureStore(initialState) {
  const store = createStore(gameStateReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('./reducers/gameStateReducer/gameStateReducer');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}