import React from 'react';
import { shallow } from 'enzyme';
import DogsView, { DogsViewProps } from '../dogs-view';
import LoadMore from '../components/load-more';
import DogsBreed from '../components/dogs-breed';

describe('(View) DogsView', () => {
  let component;
  const defaultProps: DogsViewProps = {
    dogsBreedDogs: [],
    favoriteDogs: [],
    isLoading: false,
    showLoadMore: false,
  };

  const shallowDogsView = (extendedProps: Partial<DogsViewProps> = {}) => {
    component = shallow(<DogsView {...defaultProps} {...extendedProps} />);
  };

  beforeEach(() => shallowDogsView());

  it('renders the LoadMore component if showLoadMore is truthy', () => {
    shallowDogsView({ showLoadMore: true });
    expect(component.find(LoadMore)).toHaveLength(1);
  });

  it('does not render the LoadMore component if showLoadMore is falsy', () => {
    shallowDogsView({ showLoadMore: false });
    expect(component.find(LoadMore)).toHaveLength(0);
  });

  it('does not render the favorite dogs component if isLoading is true', () => {
    shallowDogsView({ isLoading: true });
    expect(component.find(DogsBreed)).toHaveLength(1);
  });

  it('renders the favorite dogs component if isLoading is false', () => {
    shallowDogsView({ isLoading: false });
    expect(component.find(DogsBreed)).toHaveLength(2);
  });
});
