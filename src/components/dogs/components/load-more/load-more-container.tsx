import React from 'react';
import { useDispatch } from 'react-redux';
import { dogsBreedImagesLimitIncrease } from '../../../../redux/modules/dogs-breed';
import LoadMoreView from './load-more-view';

export const LoadMoreContainer: React.FC = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(dogsBreedImagesLimitIncrease());
  };

  return (
    <LoadMoreView
      handleClick={handleClick}
    />
  );
};

export default LoadMoreContainer;
