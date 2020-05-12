import React from 'react';
import { shallow } from 'enzyme';
import {
  DogsBreedContainer,
  OwnProps,
} from '../dogs-breed-container';
import DogsBreedView from '../dogs-breed-view';
import Loader from '../../../../../components/loader';
import * as dogsBreedsModule from '../../../../../redux/modules/dogs-breed';

jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn(),
}));

describe('(Container) DogsBreedContainer', () => {
  let component;
  const defaultProps: OwnProps = {
    dogs: [],
    isLoading: false,
  };

  afterAll(() => {
    jest.restoreAllMocks();
  });

  const shallowDogsBreedContainer = (extendedProps: Partial<OwnProps> = {}) => {
    component = shallow(<DogsBreedContainer {...defaultProps} {...extendedProps} />);
  };

  beforeEach(() => shallowDogsBreedContainer());

  it('renders the loader component if isLoading it true', () => {
    shallowDogsBreedContainer({ isLoading: true });
    expect(component.find(DogsBreedView)).toHaveLength(0);
    expect(component.find(Loader)).toHaveLength(1);
  });

  it('renders the dogs breed view component if isLoading it false', () => {
    shallowDogsBreedContainer({ isLoading: false });

    expect(component.find(DogsBreedView)).toHaveLength(1);
    expect(component.find(Loader)).toHaveLength(0);
    expect(Object.keys(component.find(DogsBreedView).props())).toEqual(['dogs', 'handleClickFavorite']);
  });

  it('calls dogsBreedFavoriteToggle on handleClickFavorite', () => {
    const dogsBreedFavoriteToggleSpy = jest.spyOn(dogsBreedsModule, 'dogsBreedFavoriteToggle');
    shallowDogsBreedContainer({ isLoading: false });
    component.find(DogsBreedView).props().handleClickFavorite(1);
    expect(dogsBreedFavoriteToggleSpy).toHaveBeenCalledWith(1);
    dogsBreedFavoriteToggleSpy.mockRestore();
  });
});
