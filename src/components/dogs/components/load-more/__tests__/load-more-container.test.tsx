import React from 'react';
import { shallow } from 'enzyme';
import { LoadMoreContainer } from '../load-more-container';
import LoadMoreView from '../load-more-view';
import * as dogsBreedModule from '../../../../../redux/modules/dogs-breed';

jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn(),
}));

describe('(Container) LoadMoreContainer', () => {
  let component;

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('renders LoadMoreView component', () => {
    component = shallow(<LoadMoreContainer />);
    expect(component.find(LoadMoreView)).toHaveLength(1);
  });

  it('calls imagesLimitIncrease on handleClick', () => {
    const dogsBreedImagesLimitIncreaseSpy = jest.spyOn(dogsBreedModule, 'dogsBreedImagesLimitIncrease');
    component = shallow(<LoadMoreContainer />);
    component.find(LoadMoreView).props().handleClick();

    expect(dogsBreedImagesLimitIncreaseSpy).toHaveBeenCalled();
  });
});
