import {
  dogClient as api
} from './providers/axios';

export const daoDogBreedGet = (breedName) => api.get(`breed/${breedName}/images`);

export default {
  daoDogBreedGet
};