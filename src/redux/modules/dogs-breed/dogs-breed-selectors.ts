// ------------------------------------
// Selectors
// ------------------------------------

export const dogsBreedTree = (state: ApplicationShape) => state.dogsBreed || {};
export const dogsBreedIsLoading = (state: ApplicationShape) => (dogsBreedTree(state) as DogsBreedShape).isLoading;
export const dogsBreedRequestGetIsLoading = (state: ApplicationShape) => (
  (dogsBreedTree(state) as DogsBreedShape).dogsBreedRequestGetIsLoading
);
export const dogsBreedsAllGetIsLoading = (state: ApplicationShape) => (
  (dogsBreedTree(state) as DogsBreedShape).dogsBreedsAllGetIsLoading
);
export const dogsBreedsAll = (state: ApplicationShape) => (dogsBreedTree(state) as DogsBreedShape).allDogsBreeds || {};
export const dogsBreedImagesLimit = (state: ApplicationShape) => (dogsBreedTree(state) as DogsBreedShape).imagesLimit;
export const dogsBreedDogsAll = (state: ApplicationShape) => (dogsBreedTree(state) as DogsBreedShape).dogs || [];
export const dogsBreedDogsFavorite = (state: ApplicationShape) => (
  (dogsBreedTree(state) as DogsBreedShape).favoriteDogs || []
);
export const dogsBreedDogs = (state: ApplicationShape) => {
  const dogs = dogsBreedDogsAll(state);
  const limit = dogsBreedImagesLimit(state);
  return dogs.slice(0, limit);
};
export const dogsBreedShowLoadMore = (state: ApplicationShape) => (
  !!dogsBreedDogs(state).length && (dogsBreedImagesLimit(state) < dogsBreedDogsAll(state).length)
);
export const dogsBreedIsSupported = (state: ApplicationShape, breed: string) => {
  const allBreeds = dogsBreedsAll(state);
  return allBreeds.hasOwnProperty(breed);
};
