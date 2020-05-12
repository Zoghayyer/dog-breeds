import React, { FC, useEffect } from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import {
  shallowEqual,
  useDispatch,
  useSelector,
} from 'react-redux';
import {
  dogsBreedDogs,
  dogsBreedDogsFavorite,
  dogsBreedRequestGetIsLoading,
  dogsBreedsAllGetIsLoading,
  dogsBreedsAllRequestGet,
  dogsBreedShowLoadMore,
} from '../../redux/modules/dogs-breed';
import DogsView from './dogs-view';
import Loader from '../loader';

export interface StateProps {
  dogsBreedDogs: Dog[];
  dogsBreedRequestGetIsLoading: boolean;
  dogsBreedsAllGetIsLoading: boolean;
  favoriteDogs: Dog[];
  showLoadMore: boolean;
}

export const DogsContainer: FC = () => {
  const stateProps: StateProps = useSelector((state: ApplicationShape) => ({
    dogsBreedDogs: dogsBreedDogs(state),
    dogsBreedRequestGetIsLoading: dogsBreedRequestGetIsLoading(state),
    dogsBreedsAllGetIsLoading: dogsBreedsAllGetIsLoading(state),
    favoriteDogs: dogsBreedDogsFavorite(state),
    showLoadMore: dogsBreedShowLoadMore(state),
  }), shallowEqual);

  const dispatch: ThunkDispatch<{}, any, AnyAction> = useDispatch();

  useEffect(() => {
    // Get all of the supported dogs breeds so that we can validate users' search against it.
    dispatch(dogsBreedsAllRequestGet());
  }, []);

  const shouldShowLoadMore = () => stateProps.showLoadMore && !stateProps.dogsBreedRequestGetIsLoading;

  if (stateProps.dogsBreedsAllGetIsLoading) {
    return <Loader style={loaderStyles} />;
  }

  return (
    <DogsView
      dogsBreedDogs={stateProps.dogsBreedDogs}
      favoriteDogs={stateProps.favoriteDogs}
      isLoading={stateProps.dogsBreedRequestGetIsLoading}
      showLoadMore={shouldShowLoadMore()}
    />
  );
};

const loaderStyles = {
  left: '50%',
  position: 'fixed',
  top: '50%',
  transform: 'translate(-50%, -50%)',
};

export default DogsContainer;
