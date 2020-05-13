import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '../../not-found';

describe('(Component) NotFound', () => {
  let component;

  const shallowNotFound = (extendedProps = {}) => {
    component = shallow(<NotFound  {...extendedProps} />);
  };

  beforeEach(() => shallowNotFound());

  it('renders not found component', () => {
    expect(component).toMatchSnapshot();
  });
});
