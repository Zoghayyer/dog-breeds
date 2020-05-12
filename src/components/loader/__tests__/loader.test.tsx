import React from 'react';
import { shallow } from 'enzyme';
import Loader, { LoaderProps } from '../loader';

describe('(Component) Loader', () => {
  const defaultProps: LoaderProps = {
    style: {
      width: '100%',
    },
  };

  it('has a loader component', () => {
    const component = shallow(<Loader {...defaultProps} />);
    expect(component.find('.loader')).toHaveLength(1);
  });
});
