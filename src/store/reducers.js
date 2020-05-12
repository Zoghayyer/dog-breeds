import { combineReducers } from 'redux';
import { dogBreedReducer } from '../modules/dog-breed';

export const makeRootReducerFactory = ({ combineReducers, ...reducers }) => (asyncReducers) => combineReducers({
  // Add sync reducers here
  ...reducers,
  ...asyncReducers
});

export const makeRootReducer = makeRootReducerFactory({
  combineReducers,
  dogs: dogBreedReducer
});

export default makeRootReducer;