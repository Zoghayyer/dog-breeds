import React from 'react';
import { shallow } from 'enzyme';
import {
  DispatchProps,
  DogsBreedContainer,
  OwnProps,
} from '../dogs-breed-container';

describe('(Container) DogsBreedContainer', () => {
  let component;
  const defaultProps: DispatchProps & OwnProps = {
    dogs: [],
    favoriteToggle: () => ({}),
    isLoading: false,
  };

  const shallowDogsBreedContainer = (extendedProps: Partial<DispatchProps & OwnProps> = {}) => {
    component = shallow(<DogsBreedContainer {...defaultProps} {...extendedProps} />);
  };

  beforeEach(() => shallowDogsBreedContainer());

  it('renders DogsBreedView component', () => {
    expect(component).toMatchSnapshot();
  });

  it('renders the loader component if isLoading it true', () => {
    shallowDogsBreedContainer({ isLoading: true });
    expect(component).toMatchSnapshot();
  });

  describe('(Method) handleClickFavorite', () => {
    it('calls favoriteToggle with the correct id', () => {
      const favoriteToggleSpy = jest.fn();
      const props = {
        ...defaultProps,
        favoriteToggle: favoriteToggleSpy,
      };
      component = new DogsBreedContainer(props);

      component.handleClickFavorite(1);

      expect(favoriteToggleSpy).toBeCalledWith(1);
    });
  });
});
