import React from 'react';
import { shallow } from 'enzyme';
import Image, { ImageProps } from '../image';

describe('(Component) Image', () => {
  let component;
  const defaultProps: ImageProps = {
    alt: 'My fake alt text',
    className: '',
    src: 'src',
  };

  const shallowImage = (extendedProps: Partial<ImageProps> = {}) => {
    component = shallow(<Image {...defaultProps} {...extendedProps} />);
  };

  beforeEach(() => shallowImage());

  it('renders without crashing', () => {
    shallow(<Image {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });
});
