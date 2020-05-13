import React from 'react';
import { shallow } from 'enzyme';
import Loader, { LoaderProps } from '../loader';

describe('(Component) Loader', () => {
  let component;
  const defaultProps: LoaderProps = {
    className: 'className',
    size: 'sm',
  };

  const shallowLoader = (extendedProps: Partial<LoaderProps> = {}) => {
    component = shallow(<Loader {...defaultProps} {...extendedProps} />);
  };

  beforeEach(() => shallowLoader());

  it('renders without crashing', () => {
    shallow(<Loader {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });
});
