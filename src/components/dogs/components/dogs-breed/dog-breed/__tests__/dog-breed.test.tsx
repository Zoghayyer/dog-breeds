import React from 'react';
import { shallow } from 'enzyme';
import DogBreed, { OwnProps } from '../dog-breed';
import Image from '../../../../../image';
import Icon from '../../../../../icon';

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

  it('renders an image and an icon', () => {
    expect(component.find(Image)).toHaveLength(1);
    expect(component.find(Icon)).toHaveLength(1);
  });

  it('passes whiteHeartIcon to the Icon component when favorite is false', () => {
    const props = {
      ...defaultProps,
      dog: {
        alt: '',
        favorite: false,
        id: 0,
        url: '',
      },
    };
    shallowDogBreed(props);
    expect(component.find(Icon).props().icon).toBe('whiteHeartIcon');
  });

  it('passes whiteHeartIcon to the Icon component when favorite is true', () => {
    const props = {
      ...defaultProps,
      dog: {
        alt: '',
        favorite: true,
        id: 0,
        url: '',
      },
    };
    shallowDogBreed(props);
    expect(component.find(Icon).props().icon).toBe('redHeartIcon');
  });

  it('calls handleClickFavorite on handleClick', () => {
    const props = {
      ...defaultProps,
      dog: {
        alt: '',
        favorite: true,
        id: 12,
        url: '',
      },
      handleClickFavorite: jest.fn(),
    };
    shallowDogBreed(props);
    component.find(Icon).props().onClick();
    expect(props.handleClickFavorite).toHaveBeenCalledWith(12);
  });
});
