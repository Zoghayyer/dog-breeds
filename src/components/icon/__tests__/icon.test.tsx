import React from 'react';
import { shallow } from 'enzyme';
import Icon, { IconProps } from '../icon';

describe('(Component) Icon', () => {
  let component;
  const defaultProps: IconProps = {
    alt: 'My fake alt text',
    className: '',
    icon: 'redHeartIcon',
  };

  const shallowIcon = (extendedProps: Partial<IconProps> = {}) => {
    component = shallow(<Icon {...defaultProps} {...extendedProps} />);
  };

  beforeEach(() => shallowIcon());

  it('renders without crashing', () => {
    shallow(<Icon {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });

  it('renders the correct icon', () => {
    const wrapper = shallow(<Icon {...defaultProps} />);
    expect(wrapper.prop('alt')).toBe(defaultProps.alt);
  });

  it('calls onClick on icon click', () => {
    const onClickSpy = jest.fn();
    shallowIcon({ onClick: onClickSpy });

    component.find('img').simulate('click');
    expect(onClickSpy).toHaveBeenCalledTimes(1);
  });
});
