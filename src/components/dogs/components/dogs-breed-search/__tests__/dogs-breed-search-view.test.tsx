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

  it('renders the invalid search message when there is an error', () => {
    shallowDogsBreedSearchView({ hasError: true });
    expect(component.find('.invalid-search')).toHaveLength(1);
  });

  it('does not render the invalid search message when there is no error', () => {
    shallowDogsBreedSearchView({ hasError: false });
    expect(component.find('.invalid-search')).toHaveLength(0);
  });

  it('renders a search button', () => {
    expect(component.find('.search-button')).toHaveLength(1);
  });

  it('calls handleSubmit on form submission', () => {
    const handleSubmitSpy = jest.fn();
    shallowDogsBreedSearchView({ handleSubmit: handleSubmitSpy });

    component.find('form').simulate('submit');
    expect(handleSubmitSpy).toHaveBeenCalledTimes(1);
  });
});
