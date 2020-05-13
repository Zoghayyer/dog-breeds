import React from 'react';
import DogBreed from './dog-breed';
import './dogs-breed.scss';

export interface DogsBreedViewProps {
  dogs: Dog[];
  handleClickFavorite: (id: number) => (void);
}

const DogsBreedView: React.FC<DogsBreedViewProps> = ({ dogs, handleClickFavorite }) => (
  <div className="mt-4 image-card">
    {dogs.map((dog) => (
      <DogBreed
        dog={dog}
        key={`${dog.id}-${dog.url}`}
        handleClickFavorite={handleClickFavorite}
      />
    ))}
  </div>
);

export default DogsBreedView;
