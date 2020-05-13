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
    theme: 'primary',
    type: 'button',
  };

  const shallowButton = (extendedProps: Partial<ButtonProps> = {}) => {
    component = shallow(<Button {...defaultProps} {...extendedProps} />);
  };

  beforeEach(() => shallowButton());

  it('renders without crashing', () => {
    shallow(<Button {...defaultProps} />);
  });

  it('is rendered with primary class attributes when passed `primary` as a theme', () => {
    shallowButton({theme: 'primary'});

    expect(component).toMatchSnapshot();
  });

  it('is rendered with secondary class attributes when passed `secondary` as a theme', () => {
    shallowButton({ theme: 'secondary' });

    expect(component).toMatchSnapshot();
  });

  it('is rendered with tertiary class attributes when passed `tertiary` as a theme', () => {
    shallowButton({ theme: 'tertiary' });

    expect(component).toMatchSnapshot();
  });

  it('renders a large button when passed size = `lg`', () => {
    shallowButton({ size: 'lg' });

    expect(component).toMatchSnapshot();
  });

  it('calls onClick on button click', () => {
    const onClickSpy = jest.fn();
    shallowButton({ onClick: onClickSpy });

    component.find('button').simulate('click');
    expect(onClickSpy).toHaveBeenCalledTimes(1);
  });
});
