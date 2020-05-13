import * as React from 'react';
import { shallow } from 'enzyme';
import AppView from '../app-view';

describe('(View) AppView', () => {
  let component;
  const defaultProps: any = {
    history: {},
  };

  const shallowAppView = (extendedProps = {}) => {
    component = shallow(<AppView {...defaultProps} {...extendedProps} />);
  };

  beforeEach(() => shallowAppView());

  it('renders without crashing', () => {
    shallow(<AppView {...defaultProps} />);
  });

  it('it renders the view component', () => {
    expect(component).toMatchSnapshot();
  });
});
