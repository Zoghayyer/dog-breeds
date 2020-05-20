import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import {
  dogsBreedClear,
  dogsBreedImagesLimitReset,
  dogsBreedIsSupported,
  dogsBreedRequestGet,
} from '../../../../redux/modules/dogs-breed';
import DogsBreedSearchView from './dogs-breed-search-view';

export interface StateProps {
  breedIsSupported: (word: string) => (void);
}

export interface State {
  dogsBreedValue: string;
  hasError: boolean;
}

export const DogsBreedSearchContainer: React.FC = () => {
  const dispatch: ThunkDispatch<State, any, AnyAction> = useDispatch();
  // useSelector
  const breedIsSupported = useSelector((state: ApplicationShape) => (
    (word: string) => dogsBreedIsSupported(state, word)),
  );

  // useState
  const [hasError, setHasError] = useState<boolean>(false);
  const [dogsBreedValue, setDogsBreedValue] = useState<string>('');

  // Helpers
  const clearSearchInput = () => setDogsBreedValue('');

  const handleError = () => {
    setHasError(true);
    dispatch(dogsBreedClear());
  };

  const findBreedName = (userInput: string) => {
    // Split user input on space.
    const userInputSplit: string[] = userInput.split(' ');

    // Find and return the first dog breed from user's input; otherwise, return an empty string
    return userInputSplit.find((word) => breedIsSupported(word)) || '';
  };

  const handleChange = (event: MessageEvent) => {
    const target = event.target as HTMLTextAreaElement;
    const value = target.value;

    setDogsBreedValue(value);
  };

  const handleSubmit = (event: MessageEvent) => {
    event.preventDefault();

    const breedName: string = findBreedName(dogsBreedValue.toLowerCase());

    if (!breedName) {
      clearSearchInput();
      handleError();
      return;
    }

    // Reset the images limit
    dispatch(dogsBreedImagesLimitReset());

    dispatch(dogsBreedRequestGet(breedName))
      .then(() => setHasError(false))
      .catch(this.handleError);

    clearSearchInput();
  };

  return (
    <DogsBreedSearchView
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      dogsBreedValue={dogsBreedValue}
      hasError={hasError}
    />
  );
};

export default DogsBreedSearchContainer;
