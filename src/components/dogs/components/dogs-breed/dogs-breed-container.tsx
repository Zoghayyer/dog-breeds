import React from 'react';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { dogsBreedFavoriteToggle } from '../../../../redux/modules/dogs-breed';
import DogsBreedView from './dogs-breed-view';
import Loader from '../../../loader';

export interface OwnProps {
  dogs: Dog[];
  isLoading?: boolean;
}

export const DogsBreedContainer: React.FC<OwnProps> = (props) => {
  const dispatch: ThunkDispatch<{}, any, AnyAction> = useDispatch();

  const handleClickFavorite = (id: number) => {
    dispatch(dogsBreedFavoriteToggle(id));
  };

  if (props.isLoading) {
    return <Loader style={loaderStyles} />;
  }

  return (
    <DogsBreedView
      dogs={props.dogs}
      handleClickFavorite={handleClickFavorite}
    />
  );
};

const loaderStyles = {
  marginTop: '15px',
};

export default DogsBreedContainer;
