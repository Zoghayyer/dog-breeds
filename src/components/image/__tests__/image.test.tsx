import React from 'react';
import { shallow } from 'enzyme';
import Image, { ImageProps } from '../image';

describe('(Component) Image', () => {
  const defaultProps: ImageProps = {
    alt: 'My fake alt text',
    className: 'className',
    src: 'src',
    style: {
      fontSize: '10px',
    },
  };

  it('renders an image with the correct props', () => {
    const component  = shallow(<Image {...defaultProps} />);
    expect(component.find('img')).toHaveLength(1);
    expect(component.prop('alt')).toBe(defaultProps.alt);
    expect(component.prop('style')).toBe(defaultProps.style);
  });
});
