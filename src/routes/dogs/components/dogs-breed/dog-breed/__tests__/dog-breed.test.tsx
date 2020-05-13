import React from 'react';
import { shallow } from 'enzyme';
import DogBreed, { OwnProps } from '../dog-breed';

describe('(Container) DogBreed', () => {
  let component;
  const defaultProps: OwnProps = {
    dog: {
      alt: '',
      favorite: false,
      id: 0,
      url: '',
    },
    handleClickFavorite: () => ({}),
  };

  const shallowDogBreed = (extendedProps: Partial<OwnProps> = {}) => {
    component = shallow(<DogBreed {...defaultProps} {...extendedProps} />);
  };

  beforeEach(() => shallowDogBreed());

  it('renders DogsBreedView component', () => {
    expect(component).toMatchSnapshot();
  });

  describe('(Method) handleClick', () => {
    it('calls handleClickFavorite with the correct id', () => {
      const handleClickFavoriteSpy = jest.fn();
      const props = {
        ...defaultProps,
        dog: {
          ...defaultProps.dog,
          id: 2,
        },
        handleClickFavorite: handleClickFavoriteSpy,
      };
      component = new DogBreed(props);

      component.handleClick();

      expect(handleClickFavoriteSpy).toBeCalledWith(2);
    });
  });
});
