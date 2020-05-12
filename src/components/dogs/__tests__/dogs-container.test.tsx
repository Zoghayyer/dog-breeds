import React from 'react';
import { mount, shallow } from 'enzyme';
import { DogsContainer } from '../dogs-container';
import DogsView from '../dogs-view';
import Loader from '../../../components/loader';
import * as dogsBreedModule from '../../../redux/modules/dogs-breed';
import * as redux from 'react-redux';

jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn(),
  useSelector: jest.fn(),
}));

describe('(Container) DogsContainer', () => {
  let component;

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('renders dogs view component when dogsBreedsAllGetIsLoading is false', () => {
    const useSelectorSpy = jest.spyOn(redux, 'useSelector');
    useSelectorSpy.mockReturnValue({ dogsBreedsAllGetIsLoading: false });

    component = shallow(<DogsContainer />);

    expect(component.find(Loader)).toHaveLength(0);
    expect(component.find(DogsView)).toHaveLength(1);
    expect(Object.keys(component.find(DogsView).props())).toEqual(['dogsBreedDogs', 'favoriteDogs', 'isLoading', 'showLoadMore']);

    useSelectorSpy.mockRestore();
  });

  it('renders the loader component  if dogsBreedsAllGetIsLoading is true', () => {
    const useSelectorSpy = jest.spyOn(redux, 'useSelector');
    useSelectorSpy.mockReturnValue({ dogsBreedsAllGetIsLoading: true });

    component = shallow(<DogsContainer />);

    expect(component.find(Loader)).toHaveLength(1);
    expect(component.find(DogsView)).toHaveLength(0);

    useSelectorSpy.mockRestore();
  });

  it('calls dogsBreedsAllRequestGet', () => {
    const useSelectorSpy = jest.spyOn(redux, 'useSelector');
    useSelectorSpy.mockReturnValue({ dogsBreedsAllGetIsLoading: true });
    const dogsBreedsAllRequestGetSpy = jest.spyOn(dogsBreedModule, 'dogsBreedsAllRequestGet');
    component = mount(<DogsContainer />);

    expect(dogsBreedsAllRequestGetSpy).toHaveBeenCalled();
    useSelectorSpy.mockRestore();
    dogsBreedsAllRequestGetSpy.mockRestore();
  });
});
