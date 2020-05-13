import React from 'react';
import { shallow } from 'enzyme';
import DogsView, { DogsViewProps } from '../../dogs/dogs-view';

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

  it('renders dogs view component', () => {
    expect(component).toMatchSnapshot();
  });

  it('renders the LoadMore component if showLoadMore is truthy', () => {
    shallowDogsView({ showLoadMore: true });
    expect(component).toMatchSnapshot();
  });

  it('does not render the LoadMore component if showLoadMore is falsy', () => {
    shallowDogsView({ showLoadMore: false });
    expect(component).toMatchSnapshot();
  });

  it('does not render the favorite dogs component if isLoading is true', () => {
    shallowDogsView({ isLoading: true });
    expect(component).toMatchSnapshot();
  });

  it('renders the favorite dogs component if isLoading is false', () => {
    shallowDogsView({ isLoading: false });
    expect(component).toMatchSnapshot();
  });
});
