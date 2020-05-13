import * as React from 'react';
import { shallow } from 'enzyme';
import Separator, { SeparatorProps } from '../separator';

describe('(Component) Separator', () => {
  let component;
  const defaultProps: SeparatorProps = {
    type: 'horizontal',
  };

  const shallowSeparator = (extendedProps: Partial<SeparatorProps> = {}) => {
    component = shallow(<Separator {...defaultProps} {...extendedProps} />);
  };

  beforeEach(() => shallowSeparator());

  it('renders without crashing', () => {
    shallow(<Separator {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });

  it('renders the separator component when type is horizontal', () => {
    shallowSeparator({ type: 'horizontal'});
    expect(component).toMatchSnapshot();
  });

  it('renders the separator component when type is vertical', () => {
    shallowSeparator({ type: 'vertical'});
    expect(component).toMatchSnapshot();
  });
});
