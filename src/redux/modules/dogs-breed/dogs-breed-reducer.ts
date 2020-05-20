import { AnyAction } from 'redux';
import {
  DogsBreedActionTypes,
  DogsBreedFavoriteToggleAction,
  DogsBreedReceiveGetSuccessAction,
  DogsBreedsAllReceiveGetSuccessAction,
} from './dogs-breed-action-types';

// ------------------------------------
// Initial State
// ------------------------------------
export const initialState: DogsBreedShape = {
  allDogsBreeds: {},
  dogs: [],
  dogsBreedRequestGetIsLoading: false,
  dogsBreedsAllGetIsLoading: false,
  favoriteDogs: [],
  // The default images limit
  imagesLimit: 10,
  isLoading: false,
};

// ------------------------------------
// Action Handlers Helpers
// ------------------------------------
const transformDogsImages = (dogsImages: Dog[] = [], breed: string = '') => (
  dogsImages.map((url, index) => ({
    alt: `This dog is a breed of ${breed} with an id of ${index}`,
    favorite: false,
    id: index,
    url,
  }))
);

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = () => ({
  [DogsBreedActionTypes.DOGS_BREED_REQUEST_GET]: (state: DogsBreedShape) => ({
    ...state,
    dogsBreedRequestGetIsLoading: true,
    isLoading: true,
  }),
  [DogsBreedActionTypes.DOGS_BREED_RECEIVE_GET_SUCCESS]:
    (state: DogsBreedShape, action: DogsBreedReceiveGetSuccessAction) => {
      const { data,  breed } = action.payload;
      if (Array.isArray(data)) {
        const dogsImages = transformDogsImages(data, breed);

        return {
          ...state,
          dogs: dogsImages,
          dogsBreedRequestGetIsLoading: false,
          favoriteDogs: [],
          isLoading: false,
        };
      }
      return {
        ...state,
        dogsBreedRequestGetIsLoading: false,
        isLoading: false,
      };
  },
  [DogsBreedActionTypes.DOGS_BREED_RECEIVE_GET_FAILURE]: (state: DogsBreedShape) => ({
    ...state,
    dogsBreedRequestGetIsLoading: false,
    isLoading: false,
  }),
  [DogsBreedActionTypes.DOGS_BREEDS_ALL_REQUEST_GET]: (state: DogsBreedShape) => ({
    ...state,
    dogsBreedsAllGetIsLoading: true,
    isLoading: true,
  }),
  [DogsBreedActionTypes.DOGS_BREEDS_ALL_RECEIVE_GET_SUCCESS]:
    (state: DogsBreedShape, action: DogsBreedsAllReceiveGetSuccessAction) => {
      if (typeof action.payload === 'object') {
        return {
          ...state,
          allDogsBreeds: action.payload,
          dogsBreedsAllGetIsLoading: false,
          isLoading: false,
        };
      }
      return {
        ...state,
        dogsBreedsAllGetIsLoading: false,
        isLoading: false,
      };
  },
  [DogsBreedActionTypes.DOGS_BREEDS_ALL_RECEIVE_GET_FAILURE]: (state: DogsBreedShape) => ({
    ...state,
    dogsBreedsAllGetIsLoading: false,
    isLoading: false,
  }),
  [DogsBreedActionTypes.DOGS_BREED_FAVORITE_TOGGLE]: (state: DogsBreedShape, action: DogsBreedFavoriteToggleAction) => {
    if (typeof action.payload === 'number') {
      // Make a copy of the existing dogs
      const updatedDogs: Dog[] = [...state.dogs];
      let favoriteDogs: Dog[] = [...state.favoriteDogs];

      const dog: Dog = updatedDogs[action.payload];
      dog.favorite = !dog.favorite;

      if (dog.favorite) {
        favoriteDogs = [...favoriteDogs, dog];
      } else {
        favoriteDogs = favoriteDogs.filter(({ favorite }) => favorite);
      }

      return {
        ...state,
        dogs: updatedDogs,
        favoriteDogs,
      };
    }
    return {
      ...state,
    };
  },
  [DogsBreedActionTypes.DOGS_BREED_CLEAR]: (state: DogsBreedShape) => ({
    ...state,
    dogs: [],
    favoriteDogs: [],
  }),
  [DogsBreedActionTypes.DOGS_BREED_IMAGES_LIMIT_INCREASE]: (state: DogsBreedShape) => ({
    ...state,
    imagesLimit: state.imagesLimit + 10,
  }),
  [DogsBreedActionTypes.DOGS_BREED_IMAGES_LIMIT_RESET]: (state: DogsBreedShape) => ({
    ...state,
    imagesLimit: 10,
  }),
 });

// ------------------------------------
// Reducer
// ------------------------------------
export const dogsBreedReducer = (state: DogsBreedShape = initialState, action: AnyAction) => {
  const handler = ACTION_HANDLERS()[action.type];
  return handler ? handler(state, action) : state;
};
export default dogsBreedReducer;
