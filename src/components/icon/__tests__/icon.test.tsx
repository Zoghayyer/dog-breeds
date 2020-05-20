import React from 'react';
import { shallow } from 'enzyme';
import Icon, { IconProps } from '../icon';

describe('(Component) Icon', () => {
  let component;
  const defaultProps: IconProps = {
    alt: 'My fake alt text',
    icon: 'redHeartIcon',
    style: {
      height: '100%',
    },
  };

  const shallowIcon = (extendedProps: Partial<IconProps> = {}) => {
    component = shallow(<Icon {...defaultProps} {...extendedProps} />);
  };

  beforeEach(() => shallowIcon());

  it('renders an image with the correct props', () => {
    component = shallow(<Icon {...defaultProps} />);
    expect(component.find('.img-icon')).toHaveLength(1);
    expect(component.prop('alt')).toBe(defaultProps.alt);
  });

  it('calls onClick on icon click', () => {
    const onClickSpy = jest.fn();
    shallowIcon({ onClick: onClickSpy });

    component.find('.img-icon').simulate('click');
    expect(onClickSpy).toHaveBeenCalledTimes(1);
  });
});
