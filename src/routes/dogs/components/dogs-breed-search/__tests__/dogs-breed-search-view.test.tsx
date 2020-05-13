import React from 'react';
import { shallow } from 'enzyme';
import DogsBreedSearchView, {
  Props,
} from '../dogs-breed-search-view';

describe('(View) DogsBreedSearchView', () => {
  let component;
  const defaultProps: Props = {
    dogsBreedValue: '',
    handleChange: () => ({}),
    handleSubmit: () => ({}),
    hasError: false,
  };

  const shallowDogsBreedSearchView = (extendedProps: Partial<Props> = {}) => {
    component = shallow(<DogsBreedSearchView {...defaultProps} {...extendedProps} />);
  };

  beforeEach(() => shallowDogsBreedSearchView());

  it('renders the component', () => {
    expect(component).toMatchSnapshot();
  });

  it('renders the invalid search message', () => {
    shallowDogsBreedSearchView({ hasError: true });
    expect(component).toMatchSnapshot();
  });
});
