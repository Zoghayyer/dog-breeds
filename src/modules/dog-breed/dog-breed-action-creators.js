import {
  DOG_BREED_REQUEST_GET,
  DOG_BREED_RECEIVE_GET_SUCCESS,
  DOG_BREED_RECEIVE_GET_FAILURE
} from './dog-breed-action-types';
import {
  daoDogBreedGet
} from '../../dao/dog-breed-dao';

// ------------------------------------
// Actions
// ------------------------------------
export const dogBreedReceiveGetSuccess = (payload = {}) => ({
  type: DOG_BREED_RECEIVE_GET_SUCCESS,
  payload
});

export const dogBreedReceiveGetFailure = (payload = {}) => ({
  type: DOG_BREED_RECEIVE_GET_FAILURE,
  payload
});

export const dogBreedRequestGet = (breed) => async (dispatch) => {
  dispatch({
    type: DOG_BREED_REQUEST_GET
  });

  try {
    const { data } = await daoDogBreedGet(breed);
    return dispatch(dogBreedReceiveGetSuccess({ data }));
  } catch (error) {
    return dispatch(dogBreedReceiveGetFailure(error));
  }
};
