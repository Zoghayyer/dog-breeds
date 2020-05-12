import {
  dogClient as api,
} from './providers/axios';

export const daoDogsBreedGet = (breed: string) => api.get(`breed/${breed}/images`);
export const daoDogsBreedsAllGet = () => api.get('breeds/list/all');

export default {
  daoDogsBreedGet,
  daoDogsBreedsAllGet,
};
