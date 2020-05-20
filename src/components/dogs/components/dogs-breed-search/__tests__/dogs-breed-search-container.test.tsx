import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { DogsBreedSearchContainer } from '../dogs-breed-search-container';
import DogsBreedSearchView from '../dogs-breed-search-view';
import * as dogsBreedModule from '../../../../../redux/modules/dogs-breed';

jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn(),
  useSelector: () => jest.fn(),
}));

describe('(Container) DogsBreedSearchContainer', () => {
  let component;

  afterAll(() => {
    jest.restoreAllMocks();
  });

  const shallowDogsBreedSearchContainer = () => {
    component = shallow(<DogsBreedSearchContainer />);
  };

  beforeEach(() => shallowDogsBreedSearchContainer());

  it('renders DogsBreedSearchView component', () => {
    expect(component.find(DogsBreedSearchView)).toHaveLength(1);
  });

  it('updates dogsBreedValue on handleChange', () => {
    const mockEvent = {
      target: {
        value: 'boxer hound',
      },
    };
    component = mount(<DogsBreedSearchContainer />);
    const searchInput = component.find('.search-input');
    searchInput.simulate('change', mockEvent);
    expect(component.find(DogsBreedSearchView).props().dogsBreedValue).toBe('boxer hound');
  });

  describe('#handleSubmit', () => {
    it('does not call dogsBreedImagesLimitReset, and dogsBreedRequestGet if search value is invalid', () => {
      const dogsBreedImagesLimitResetSpy = jest.spyOn(dogsBreedModule, 'dogsBreedImagesLimitReset');
      const dogsBreedRequestGetSpy = jest.spyOn(dogsBreedModule, 'dogsBreedRequestGet');
      const mockEvent = {
        target: {
          value: 'test',
        },
      };
      component = mount(<DogsBreedSearchContainer />);
      const searchInput = component.find('.search-input');
      const form = component.find('form');
      searchInput.simulate('change', mockEvent);
      form.simulate('submit');

      expect(dogsBreedImagesLimitResetSpy).not.toHaveBeenCalled();
      expect(dogsBreedRequestGetSpy).not.toHaveBeenCalled();
      expect(component.find(DogsBreedSearchView).props().hasError).toBeTruthy();
      expect(component.find(DogsBreedSearchView).props().dogsBreedValue).toBe('');

      dogsBreedImagesLimitResetSpy.mockRestore();
      dogsBreedRequestGetSpy.mockRestore();
    });
  });
});
