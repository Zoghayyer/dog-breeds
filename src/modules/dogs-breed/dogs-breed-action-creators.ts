import { ActionCreator } from 'redux';
import {
  DogsBreedActionTypes,
  DogsBreedClearAction,
  DogsBreedFavoriteToggleAction,
  DogsBreedImagesLimitIncreaseAction,
  DogsBreedImagesLimitResetAction,
  DogsBreedReceiveGetSuccessAction,
  DogsBreedsAllReceiveGetFailureAction,
  DogsBreedsAllReceiveGetSuccessAction,
} from './dogs-breed-action-types';
import {
  daoDogsBreedGet,
  daoDogsBreedsAllGet,
} from '../../dao/dogs-dao';

// ------------------------------------
// Actions
// ------------------------------------
export const dogsBreedReceiveGetSuccess: ActionCreator<DogsBreedReceiveGetSuccessAction> = (payload = {}) => ({
  payload,
  type: DogsBreedActionTypes.DOGS_BREED_RECEIVE_GET_SUCCESS,
});

export const dogsBreedReceiveGetFailure = (payload = {}) => (dispatch) => {
  dispatch({
    payload,
    type:  DogsBreedActionTypes.DOGS_BREED_RECEIVE_GET_FAILURE,
  });

  return Promise.reject(payload);
};

export const dogsBreedRequestGet = (breed: string) => (dispatch) => {
  dispatch({
    type: DogsBreedActionTypes.DOGS_BREED_REQUEST_GET,
  });

  const breedLowerCase: string = breed.toLowerCase();

  return daoDogsBreedGet(breedLowerCase)
    .then(({ data }) => dispatch(dogsBreedReceiveGetSuccess({data: data.message, breed})))
    .catch((error) => dispatch(dogsBreedReceiveGetFailure(error)));
};

export const dogsBreedsAllReceiveGetSuccess: ActionCreator<DogsBreedsAllReceiveGetSuccessAction> = (payload = {}) => ({
  payload,
  type: DogsBreedActionTypes.DOGS_BREEDS_ALL_RECEIVE_GET_SUCCESS,
});

export const dogsBreedsAllReceiveGetFailure: ActionCreator<DogsBreedsAllReceiveGetFailureAction> = (payload = {}) => ({
  payload,
  type: DogsBreedActionTypes.DOGS_BREEDS_ALL_RECEIVE_GET_FAILURE,
});

export const dogsBreedsAllRequestGet = () => (dispatch) => {
  dispatch({
    type: DogsBreedActionTypes.DOGS_BREEDS_ALL_REQUEST_GET,
  });

  return daoDogsBreedsAllGet()
    .then(({ data }) => dispatch(dogsBreedsAllReceiveGetSuccess(data.message)))
    .catch((error) => dispatch(dogsBreedsAllReceiveGetFailure(error)));
};

export const dogsBreedFavoriteToggle: ActionCreator<DogsBreedFavoriteToggleAction> = (payload = {}) => ({
  payload,
  type: DogsBreedActionTypes.DOGS_BREED_FAVORITE_TOGGLE,
});

export const dogsBreedClear: ActionCreator<DogsBreedClearAction> = () => ({
  type: DogsBreedActionTypes.DOGS_BREED_CLEAR,
});

export const dogsBreedImagesLimitIncrease: ActionCreator<DogsBreedImagesLimitIncreaseAction> = () => ({
  type: DogsBreedActionTypes.DOGS_BREED_IMAGES_LIMIT_INCREASE,
});

export const dogsBreedImagesLimitReset: ActionCreator<DogsBreedImagesLimitResetAction> = () => ({
  type: DogsBreedActionTypes.DOGS_BREED_IMAGES_LIMIT_RESET,
});
