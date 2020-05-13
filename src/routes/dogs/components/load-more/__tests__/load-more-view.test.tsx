import React from 'react';
import { shallow } from 'enzyme';
import LoadMoreView, { LoadMoreViewProps } from '../load-more-view';

describe('(View) LoadMoreView', () => {
  let component;
  const defaultProps: LoadMoreViewProps = {
    handleClick: () => ({}),
  };

  const shallowLoadMoreView = (extendedProps: Partial<LoadMoreViewProps> = {}) => {
    component = shallow(<LoadMoreView {...defaultProps} {...extendedProps} />);
  };

  beforeEach(() => shallowLoadMoreView());

  it('renders LoadMoreView component', () => {
    expect(component).toMatchSnapshot();
  });

  it('calls handleClick on button click', () => {
    const handleClickSpy = jest.fn();
    shallowLoadMoreView({ handleClick: handleClickSpy });

    component.find('.load-more-button').simulate('click');
    expect(handleClickSpy).toHaveBeenCalledTimes(1);
  });
});
