/**
 * This is a _definition_ file. This file allows the usage of ambient types.
 * This means any types declared here can be used within the application without
 * importing from the actual file.
 *
 */
interface Dog {
  alt: string;
  favorite: boolean;
  id: number;
  url: string;
}

interface DogsBreedShape {
  allDogsBreeds: any;
  dogs: Dog[];
  dogsBreedRequestGetIsLoading: boolean;
  dogsBreedsAllGetIsLoading: boolean;
  favoriteDogs: Dog[];
  imagesLimit: number;
  isLoading: boolean;
}

interface ApplicationShape {
  dogsBreed: DogsBreedShape;
}
