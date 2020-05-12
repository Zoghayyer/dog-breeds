import { combineReducers } from 'redux';
import { dogsBreedReducer } from './modules/dogs-breed';

export const makeRootReducerFactory = ({ combineReducers, ...reducers }) => (asyncReducers) => combineReducers({
  // Add sync reducers here
  ...reducers,
  ...asyncReducers,
});

export const makeRootReducer = makeRootReducerFactory({
  combineReducers,
  dogsBreed: dogsBreedReducer,
});

export default makeRootReducer;
