import React from 'react';
import { shallow } from 'enzyme';
import Header, { HeaderProps } from '../header';

describe('(Component) Header', () => {
  it('renders the correct children', () => {
    const props: HeaderProps = {
      children: <div className="child-1">Div</div>,
    };
    const component = shallow(<Header {...props} />);
    expect(component.find('.child-1')).toHaveLength(1);
  });
});
