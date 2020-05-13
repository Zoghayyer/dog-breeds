import React from 'react';
import { shallow } from 'enzyme';
import Header, { HeaderProps } from '../header';

describe('(Component) Header', () => {
  let component;
  const defaultProps: HeaderProps = {
    children: <div>child</div>,
    className: 'className',
  };

  const shallowHeader = (extendedProps = {}) => {
    component = shallow(<Header {...defaultProps} {...extendedProps} />);
  };

  beforeEach(() => shallowHeader());

  it('renders without crashing', () => {
    shallow(<Header><div id="child" /></Header>);
    expect(component).toMatchSnapshot();
  });
});
