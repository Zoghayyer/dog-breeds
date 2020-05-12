import { Action } from 'redux';

// ------------------------------------
// Action Types
// ------------------------------------

export enum DogsBreedActionTypes {
  DOGS_BREED_REQUEST_GET = 'DOGS_BREED_REQUEST_GET',
  DOGS_BREED_RECEIVE_GET_SUCCESS = 'DOGS_BREED_RECEIVE_GET_SUCCESS',
  DOGS_BREED_RECEIVE_GET_FAILURE = 'DOGS_BREED_RECEIVE_GET_FAILURE',
  DOGS_BREEDS_ALL_REQUEST_GET = 'DOGS_BREEDS_ALL_REQUEST_GET',
  DOGS_BREEDS_ALL_RECEIVE_GET_SUCCESS = 'DOGS_BREEDS_ALL_RECEIVE_GET_SUCCESS',
  DOGS_BREEDS_ALL_RECEIVE_GET_FAILURE = 'DOGS_BREEDS_ALL_RECEIVE_GET_FAILURE',
  DOGS_BREED_FAVORITE_TOGGLE = 'DOGS_BREED_FAVORITE_TOGGLE',
  DOGS_BREED_CLEAR = 'DOGS_BREED_CLEAR',
  DOGS_BREED_IMAGES_LIMIT_INCREASE = 'DOGS_BREED_IMAGES_LIMIT_INCREASE',
  DOGS_BREED_IMAGES_LIMIT_RESET = 'DOGS_BREED_IMAGES_LIMIT_RESET',
}

interface DogsBreedReceiveGetSuccessActionPayload {
  breed: string;
  data: Dog[];
}

export interface DogsBreedReceiveGetSuccessAction extends Action {
  payload: DogsBreedReceiveGetSuccessActionPayload;
  type: DogsBreedActionTypes.DOGS_BREED_RECEIVE_GET_SUCCESS;
}

export interface DogsBreedReceiveGetFailureAction extends Action {
  payload: any;
  type: DogsBreedActionTypes.DOGS_BREED_RECEIVE_GET_FAILURE;
}

export interface DogsBreedRequestGetAction extends Action {
  payload: any;
  type: DogsBreedActionTypes.DOGS_BREED_REQUEST_GET;
}

export interface DogsBreedsAllReceiveGetSuccessAction extends Action {
  payload: DogsBreedsAll;
  type: DogsBreedActionTypes.DOGS_BREEDS_ALL_RECEIVE_GET_SUCCESS;
}

export interface DogsBreedsAllReceiveGetFailureAction extends Action {
  payload: any;
  type: DogsBreedActionTypes.DOGS_BREEDS_ALL_RECEIVE_GET_FAILURE;
}

export interface DogsBreedsAllRequestGetAction extends Action {
  payload: any;
  type: DogsBreedActionTypes.DOGS_BREEDS_ALL_REQUEST_GET;
}

export interface DogsBreedFavoriteToggleAction extends Action {
  payload: number;
  type: DogsBreedActionTypes.DOGS_BREED_FAVORITE_TOGGLE;
}

export interface DogsBreedImagesLimitIncreaseAction extends Action {
  type: DogsBreedActionTypes.DOGS_BREED_IMAGES_LIMIT_INCREASE;
}

export interface DogsBreedClearAction extends Action {
  type: DogsBreedActionTypes.DOGS_BREED_CLEAR;
}

export interface DogsBreedImagesLimitResetAction extends Action {
  type: DogsBreedActionTypes.DOGS_BREED_IMAGES_LIMIT_RESET;
}
