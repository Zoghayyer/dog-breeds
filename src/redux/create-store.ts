import {
  applyMiddleware,
  compose,
  createStore as reduxCreateStore,
} from 'redux';
import thunk from 'redux-thunk';
import makeRootReducer from './reducers';

export const createStoreFactory = ({
  applyMiddleware,
  compose,
  reduxCreateStore,
  thunk,
  makeRootReducer,
}) => (initialState = {}) => {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middleware = [thunk];
  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = [];
  const devToolsExtension = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
  // ======================================================
  // Store Instantiation
  // ======================================================
  const store = reduxCreateStore(
    makeRootReducer(),
    initialState,
    compose(
      applyMiddleware(...middleware),
      ...enhancers,
    ),
  );

  return store;
};

const store = createStoreFactory({
  applyMiddleware,
  compose,
  makeRootReducer,
  reduxCreateStore,
  thunk,
})();

export default store;
