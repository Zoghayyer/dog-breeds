import {
  DOG_BREED_REQUEST_GET,
  DOG_BREED_RECEIVE_GET_SUCCESS,
  DOG_BREED_RECEIVE_GET_FAILURE
} from './dog-breed-action-types';

// ------------------------------------
// Initial State
// ------------------------------------
export const initialState = {
  dogs: [],
  isLoading: false
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = () => ({
  [DOG_BREED_REQUEST_GET]: (state) => ({
    ...state,
    isLoading: true
  }),
  [DOG_BREED_RECEIVE_GET_SUCCESS]: (state, action) => {
    if (typeof action.payload === 'object') {
      console.log(action.payload);
      return {
        ...state,
        isLoading: false
      }
    }
    return {
      ...state,
      isLoading: false
    }
  },
  [DOG_BREED_RECEIVE_GET_FAILURE]: (state) => ({
    ...state,
    isLoading: false
  })
 });
// ------------------------------------
// Reducer
// ------------------------------------
export const dogBreedReducer = (state = initialState, action) => {
  const handler = ACTION_HANDLERS()[action.type];
  return handler ? handler(state, action) : state;
};
export default dogBreedReducer;