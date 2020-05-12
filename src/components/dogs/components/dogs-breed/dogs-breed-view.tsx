import React from 'react';
import styled from '@emotion/styled';
import DogBreed from './dog-breed';
import { devices } from '../../../../assets/devices';

export interface DogsBreedViewProps {
  dogs: Dog[];
  handleClickFavorite: (id: number) => (void);
}

const DogsBreedView: React.FC<DogsBreedViewProps> = ({ dogs, handleClickFavorite }) => (
  <DogsBreedViewContainer>
    {dogs.map((dog) => (
      <DogBreed
        dog={dog}
        key={`${dog.id}-${dog.url}`}
        handleClickFavorite={handleClickFavorite}
        className="dog-breed"
      />
    ))}
  </DogsBreedViewContainer>
);

const DogsBreedViewContainer = styled.div`
  margin-top: 15px;
  display: grid;
  grid-template-Columns: repeat(auto-fill, 200px);
  width: 100%;

  @media ${devices.desktop} {
    grid-column-gap: 31px;
  }
  @media ${devices.laptop} {
    grid-column-gap: 38px;
  }
  @media ${devices.laptopS} {
    grid-column-gap: 109px;
  }
  @media ${devices.tablet} {
    grid-column-gap: 7px;
  }
`;

export default DogsBreedView;
