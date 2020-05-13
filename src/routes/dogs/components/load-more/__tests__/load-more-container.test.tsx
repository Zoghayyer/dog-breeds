import React from 'react';
import { shallow } from 'enzyme';
import {
  DispatchProps,
  LoadMoreContainer,
} from '../load-more-container';

describe('(Container) LoadMoreContainer', () => {
  let component;
  const defaultProps: DispatchProps = {
    imagesLimitIncrease: () => ({}),
  };

  const shallowLoadMoreContainer = (extendedProps: Partial<DispatchProps> = {}) => {
    component = shallow(<LoadMoreContainer {...defaultProps} {...extendedProps} />);
  };

  beforeEach(() => shallowLoadMoreContainer());

  it('renders LoadMoreView component', () => {
    expect(component).toMatchSnapshot();
  });

  describe('(Method) handleClick', () => {
    it('calls imagesLimitIncrease', () => {
      const imagesLimitIncreaseSpy = jest.fn();
      const props = {
        ...defaultProps,
        imagesLimitIncrease: imagesLimitIncreaseSpy,
      };
      component = new LoadMoreContainer(props);

      component.handleClick();

      expect(imagesLimitIncreaseSpy).toBeCalled();
    });
  });
});
