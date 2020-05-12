import {
  dogsBreedDogs,
  dogsBreedDogsAll,
  dogsBreedDogsFavorite,
  dogsBreedImagesLimit,
  dogsBreedIsLoading,
  dogsBreedIsSupported,
  dogsBreedRequestGetIsLoading,
  dogsBreedsAll,
  dogsBreedsAllGetIsLoading,
  dogsBreedShowLoadMore,
  dogsBreedTree,
} from '../dogs-breed-selectors';

describe('(Selectors)', () => {
  describe('dogsBreedTree', () => {
    it('dogsBreedTree', () => {
      const state = {
        dogsBreed: {
          allDogsBreeds: {},
          dogs: [],
          dogsBreedRequestGetIsLoading: false,
          dogsBreedsAllGetIsLoading: false,
          favoriteDogs: [],
          imagesLimit: 10,
          isLoading: false,
        },
      };
      const expected = {
        allDogsBreeds: {},
        dogs: [],
        dogsBreedRequestGetIsLoading: false,
        dogsBreedsAllGetIsLoading: false,
        favoriteDogs: [],
        imagesLimit: 10,
        isLoading: false,
      };

      expect(dogsBreedTree(state)).toEqual(expected);
    });
  });

  describe('dogsBreedIsLoading', () => {
    it('returns the value of isLoading prop', () => {
      const state = {
        dogsBreed: {
          allDogsBreeds: {},
          dogs: [],
          dogsBreedRequestGetIsLoading: false,
          dogsBreedsAllGetIsLoading: false,
          favoriteDogs: [],
          imagesLimit: 10,
          isLoading: false,
        },
      };
      const expected = false;

      expect(dogsBreedIsLoading(state)).toEqual(expected);
    });
  });

  describe('dogsBreedRequestGetIsLoading', () => {
    it('returns the value of dogsBreedRequestGetIsLoading prop', () => {
      const state = {
        dogsBreed: {
          allDogsBreeds: {},
          dogs: [],
          dogsBreedRequestGetIsLoading: true,
          dogsBreedsAllGetIsLoading: false,
          favoriteDogs: [],
          imagesLimit: 10,
          isLoading: false,
        },
      };
      const expected = true;

      expect(dogsBreedRequestGetIsLoading(state)).toEqual(expected);
    });
  });

  describe('dogsBreedsAllGetIsLoading', () => {
    it('returns the value of dogsBreedsAllGetIsLoading prop', () => {
      const state = {
        dogsBreed: {
          allDogsBreeds: {},
          dogs: [],
          dogsBreedRequestGetIsLoading: true,
          dogsBreedsAllGetIsLoading: false,
          favoriteDogs: [],
          imagesLimit: 10,
          isLoading: false,
        },
      };
      const expected = false;

      expect(dogsBreedsAllGetIsLoading(state)).toEqual(expected);
    });
  });

  describe('dogsBreedsAll', () => {
    it('returns all dogs breed', () => {
      const state = {
        dogsBreed: {
          allDogsBreeds: {
            breed1: [],
            breed2: [],
            breed3: [],
          },
          dogs: [],
          dogsBreedRequestGetIsLoading: false,
          dogsBreedsAllGetIsLoading: false,
          favoriteDogs: [],
          imagesLimit: 10,
          isLoading: false,
        },
      };
      const expected = {
        breed1: [],
        breed2: [],
        breed3: [],
      };

      expect(dogsBreedsAll(state)).toEqual(expected);
    });
  });

  describe('dogsBreedIsSupported', () => {
    it('returns true if breed name exists in the allDogsBreeds', () => {
      const state = {
        dogsBreed: {
          allDogsBreeds: {
            breed1: [],
            breed2: [],
            breed3: [],
          },
          dogs: [],
          dogsBreedRequestGetIsLoading: false,
          dogsBreedsAllGetIsLoading: false,
          favoriteDogs: [],
          imagesLimit: 10,
          isLoading: false,
        },
      };
      const expected = true;

      expect(dogsBreedIsSupported(state, 'breed1')).toEqual(expected);
    });

    it('returns false if breed name does not exist in the allDogsBreeds', () => {
      const state = {
        dogsBreed: {
          allDogsBreeds: {
            breed1: [],
            breed2: [],
            breed3: [],
          },
          dogs: [],
          dogsBreedRequestGetIsLoading: false,
          dogsBreedsAllGetIsLoading: false,
          favoriteDogs: [],
          imagesLimit: 10,
          isLoading: false,
        },
      };
      const expected = false;

      expect(dogsBreedIsSupported(state, 'breed5')).toEqual(expected);
    });
  });

  describe('dogsBreedImagesLimit', () => {
    it('returns the value of imagesLimit prop', () => {
      const state = {
        dogsBreed: {
          allDogsBreeds: {},
          dogs: [],
          dogsBreedRequestGetIsLoading: false,
          dogsBreedsAllGetIsLoading: false,
          favoriteDogs: [],
          imagesLimit: 10,
          isLoading: false,
        },
      };
      const expected = 10;

      expect(dogsBreedImagesLimit(state)).toEqual(expected);
    });
  });

  describe('dogsBreedDogsAll', () => {
    it('returns the value of dogs prop', () => {
      const state = {
        dogsBreed: {
          allDogsBreeds: {},
          dogs: [
            {
              alt: '',
              favorite: false,
              id: 0,
              url: '',
            },
          ],
          dogsBreedRequestGetIsLoading: false,
          dogsBreedsAllGetIsLoading: false,
          favoriteDogs: [],
          imagesLimit: 10,
          isLoading: false,
        },
      };
      const expected = [
        {
          alt: '',
          favorite: false,
          id: 0,
          url: '',
        },
      ];

      expect(dogsBreedDogsAll(state)).toEqual(expected);
    });
  });

  describe('dogsBreedDogsFavorite', () => {
    it('returns the value of dogs favorite prop', () => {
      const state = {
        dogsBreed: {
          allDogsBreeds: {},
          dogs: [
            {
              alt: '',
              favorite: false,
              id: 0,
              url: '',
            },
          ],
          dogsBreedRequestGetIsLoading: false,
          dogsBreedsAllGetIsLoading: false,
          favoriteDogs: [
            {
              alt: '',
              favorite: true,
              id: 0,
              url: '',
            },
          ],
          imagesLimit: 10,
          isLoading: false,
        },
      };
      const expected = [
        {
          alt: '',
          favorite: true,
          id: 0,
          url: '',
        },
      ];

      expect(dogsBreedDogsFavorite(state)).toEqual(expected);
    });
  });

  describe('dogsBreedDogs', () => {
    it('returns the correct number of dogs when imagesLimited is less than number of total dogs', () => {
      const state = {
        dogsBreed: {
          allDogsBreeds: {},
          dogs: [
            {
              alt: '',
              favorite: false,
              id: 0,
              url: '',
            },
            {
              alt: '',
              favorite: true,
              id: 1,
              url: '',
            },
            {
              alt: '',
              favorite: false,
              id: 2,
              url: '',
            },
            {
              alt: '',
              favorite: false,
              id: 3,
              url: '',
            },
            {
              alt: '',
              favorite: true,
              id: 4,
              url: '',
            },
          ],
          dogsBreedRequestGetIsLoading: false,
          dogsBreedsAllGetIsLoading: false,
          favoriteDogs: [],
          imagesLimit: 3,
          isLoading: false,
        },
      };
      const expected = [
        {
          alt: '',
          favorite: false,
          id: 0,
          url: '',
        },
        {
          alt: '',
          favorite: true,
          id: 1,
          url: '',
        },
        {
          alt: '',
          favorite: false,
          id: 2,
          url: '',
        },
      ];

      expect(dogsBreedDogs(state)).toEqual(expected);
    });

    it('returns the correct number of dogs when imagesLimited is greater than number of total dogs', () => {
      const state = {
        dogsBreed: {
          allDogsBreeds: {},
          dogs: [
            {
              alt: '',
              favorite: false,
              id: 0,
              url: '',
            },
            {
              alt: '',
              favorite: true,
              id: 1,
              url: '',
            },
            {
              alt: '',
              favorite: false,
              id: 2,
              url: '',
            },
            {
              alt: '',
              favorite: false,
              id: 3,
              url: '',
            },
            {
              alt: '',
              favorite: true,
              id: 4,
              url: '',
            },
          ],
          dogsBreedRequestGetIsLoading: false,
          dogsBreedsAllGetIsLoading: false,
          favoriteDogs: [],
          imagesLimit: 10,
          isLoading: false,
        },
      };
      const expected = [
        {
          alt: '',
          favorite: false,
          id: 0,
          url: '',
        },
        {
          alt: '',
          favorite: true,
          id: 1,
          url: '',
        },
        {
          alt: '',
          favorite: false,
          id: 2,
          url: '',
        },
        {
          alt: '',
          favorite: false,
          id: 3,
          url: '',
        },
        {
          alt: '',
          favorite: true,
          id: 4,
          url: '',
        },
      ];

      expect(dogsBreedDogs(state)).toEqual(expected);
    });
  });

  describe('dogsBreedShowLoadMore', () => {
    it('returns true if there are dogs in store and total of all dogs is greater than current images limit', () => {
      const state = {
        dogsBreed: {
          allDogsBreeds: {},
          dogs: [
            {
              alt: '',
              favorite: false,
              id: 0,
              url: '',
            },
            {
              alt: '',
              favorite: true,
              id: 1,
              url: '',
            },
            {
              alt: '',
              favorite: false,
              id: 2,
              url: '',
            },
            {
              alt: '',
              favorite: false,
              id: 3,
              url: '',
            },
            {
              alt: '',
              favorite: true,
              id: 4,
              url: '',
            },
            {
              alt: '',
              favorite: false,
              id: 5,
              url: '',
            },
          ],
          dogsBreedRequestGetIsLoading: false,
          dogsBreedsAllGetIsLoading: false,
          favoriteDogs: [],
          imagesLimit: 5,
          isLoading: false,
        },
      };
      const expected = true;

      expect(dogsBreedShowLoadMore(state)).toEqual(expected);
    });

    it('returns false if there are dogs in store but the total of all dogs is equal or less than the current images limit', () => {
      const state = {
        dogsBreed: {
          allDogsBreeds: {},
          dogs: [
            {
              alt: '',
              favorite: false,
              id: 0,
              url: '',
            },
            {
              alt: '',
              favorite: true,
              id: 1,
              url: '',
            },
            {
              alt: '',
              favorite: false,
              id: 2,
              url: '',
            },
            {
              alt: '',
              favorite: false,
              id: 3,
              url: '',
            },
            {
              alt: '',
              favorite: true,
              id: 4,
              url: '',
            },
            {
              alt: '',
              favorite: false,
              id: 5,
              url: '',
            },
          ],
          dogsBreedRequestGetIsLoading: false,
          dogsBreedsAllGetIsLoading: false,
          favoriteDogs: [],
          imagesLimit: 6,
          isLoading: false,
        },
      };
      const expected = false;

      expect(dogsBreedShowLoadMore(state)).toEqual(expected);
    });
  });
});
