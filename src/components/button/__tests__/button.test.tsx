import React from 'react';
import { shallow } from 'enzyme';
import Button, { ButtonProps } from '../button';

describe('(Component) Button', () => {
  let component;

  const defaultProps: ButtonProps = {
    children: <div>child</div>,
    className: 'className',
    onClick: () => ({}),
    size: 'sm',
    type: 'button',
  };

  const shallowButton = (extendedProps: Partial<ButtonProps> = {}) => {
    component = shallow(<Button {...defaultProps} {...extendedProps} />);
  };

  beforeEach(() => shallowButton());

  it('calls onClick on button click', () => {
    const onClickSpy = jest.fn();
    shallowButton({ onClick: onClickSpy });

    component.find('.generic-button').simulate('click');
    expect(onClickSpy).toHaveBeenCalledTimes(1);
  });
});
