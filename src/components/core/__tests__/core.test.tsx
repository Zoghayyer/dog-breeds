import React from 'react';
import { shallow } from 'enzyme';
import Core from '../core';

describe('(Component) Core', () => {
  let component;

  const defaultProps = {};

  const shallowCore = (extendedProps = {}) => {
    component = shallow(<Core {...defaultProps} {...extendedProps} />);
  };

  beforeEach(() => shallowCore());

  it('renders without crashing', () => {
    shallow(<Core {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });
});
