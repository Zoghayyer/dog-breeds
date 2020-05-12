import React from 'react';
import { shallow } from 'enzyme';
import DogsBreedView, { DogsBreedViewProps } from '../dogs-breed-view';

describe('(View) DogsBreedView', () => {
  let component;
  const defaultProps: DogsBreedViewProps = {
    dogs: [
      {
        alt: 'dog number 0',
        favorite: false,
        id: 0,
        url: 'fake-url-0',
      },
      {
        alt: 'dog number 1',
        favorite: true,
        id: 1,
        url: 'fake-url-1',
      },
    ],
    handleClickFavorite: () => ({}),
  };

  it('renders DogBreed component for every dog in the dogs array', () => {
    component = shallow(<DogsBreedView {...defaultProps} />);
    expect(component.find('.dog-breed')).toHaveLength(2);
  });
});
