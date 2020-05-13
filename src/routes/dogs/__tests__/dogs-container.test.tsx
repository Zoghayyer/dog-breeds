import React from 'react';
import { shallow } from 'enzyme';
import {
  DispatchProps,
  DogsContainer,
  StateProps,
} from '../../dogs/dogs-container';

describe('(Container) DogsContainer', () => {
  let component;
  const defaultProps: DispatchProps & StateProps = {
    dogsBreedDogs: [],
    dogsBreedRequestGetIsLoading: false,
    dogsBreedsAllGetIsLoading: false,
    dogsBreedsAllRequestGet: () => ({}),
    favoriteDogs: [],
    showLoadMore: false,
  };

  const shallowDogsContainer = (extendedProps: Partial<DispatchProps & StateProps> = {}) => {
    component = shallow(<DogsContainer {...defaultProps} {...extendedProps} />);
  };

  beforeEach(() => shallowDogsContainer());

  it('renders dogs view component if dogsBreedsAllGetIsLoading is false', () => {
    shallowDogsContainer({ dogsBreedsAllGetIsLoading: false });
    expect(component).toMatchSnapshot();
  });

  it('renders the loader component if dogsBreedsAllGetIsLoading is true', () => {
    shallowDogsContainer({ dogsBreedsAllGetIsLoading: true });
    expect(component).toMatchSnapshot();
  });

  describe('(Method) componentDidMount', () => {
    it('calls dogsBreedsAllRequestGet', () => {
      const props = {
        ...defaultProps,
        dogsBreedsAllRequestGet: jest.fn().mockResolvedValue({}),
      };
      component = new DogsContainer(props);
      return component.componentDidMount()
        .then(() => {
          expect(props.dogsBreedsAllRequestGet).toHaveBeenCalled();
        });
    });
  });

  describe('(Method) showLoadMore', () => {
    it('returns false if showLoadMore is falsy', () => {
      const props = {
        ...defaultProps,
        dogsBreedRequestGetIsLoading: false,
        showLoadMore: false,
      };
      component = new DogsContainer(props);
      expect(component.showLoadMore()).toBeFalsy();
    });

    it('returns false if dogsBreedRequestGetIsLoading is truthy', () => {
      const props = {
        ...defaultProps,
        dogsBreedRequestGetIsLoading: true,
        showLoadMore: true,
      };
      component = new DogsContainer(props);
      expect(component.showLoadMore()).toBeFalsy();
    });

    it('returns true if showLoadMore is truthy and dogsBreedRequestGetIsLoading is falsy', () => {
      const props = {
        ...defaultProps,
        dogsBreedRequestGetIsLoading: false,
        showLoadMore: true,
      };
      component = new DogsContainer(props);
      expect(component.showLoadMore()).toBeTruthy();
    });
  });
});
