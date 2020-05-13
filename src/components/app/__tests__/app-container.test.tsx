import * as React from 'react';
import { shallow } from 'enzyme';
import AppContainer from '../app-container';

describe('(Container) AppContainer', () => {
  let component;
  const defaultProps = {};

  const shallowAppContainer = (extendedProps = {}) => {
    component = shallow(<AppContainer {...defaultProps} {...extendedProps} />);
  };

  beforeEach(() => shallowAppContainer());

  it('renders without crashing', () => {
    shallow(<AppContainer />);
  });

  it('it renders the view component', () => {
    expect(component).toMatchSnapshot();
  });
});
