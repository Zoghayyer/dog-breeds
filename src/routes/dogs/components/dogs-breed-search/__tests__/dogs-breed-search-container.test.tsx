import React from 'react';
import { shallow } from 'enzyme';
import {
  DispatchProps,
  DogsBreedSearchContainer,
  StateProps,
} from '../dogs-breed-search-container';

describe('(Container) DogsBreedSearchContainer', () => {
  let component;
  const defaultProps: DispatchProps & StateProps = {
    breedIsSupported: () => ({}),
    dogsBreedClear: () => ({}),
    fetchDogsBreed: jest.fn().mockResolvedValue({}),
    imagesLimitReset: () => ({}),
  };

  const shallowDogsBreedSearchContainer = (extendedProps: Partial<DispatchProps & StateProps> = {}) => {
    component = shallow(<DogsBreedSearchContainer {...defaultProps} {...extendedProps} />);
  };

  beforeEach(() => shallowDogsBreedSearchContainer());

  it('renders DogsBreedSearchView component', () => {
    expect(component).toMatchSnapshot();
  });

  describe('(Method) clearSearchInput', () => {
    it('calls setState', () => {
      component = new DogsBreedSearchContainer(defaultProps);
      const setStateStub = jest.fn();
      component.setState = setStateStub;
      component.clearSearchInput();

      expect(setStateStub).toBeCalledWith({ dogsBreedValue: '' });
    });
  });

  describe('(Method) handleError', () => {
    it('calls setState, and dogsBreedClear', () => {
      const props = {
        ...defaultProps,
        dogsBreedClear: jest.fn(),
      };
      component = new DogsBreedSearchContainer(props);
      const setStateStub = jest.fn();
      component.setState = setStateStub;
      component.handleError();

      expect(setStateStub).toBeCalledWith({ hasError: true });
      expect(props.dogsBreedClear).toHaveBeenCalled();
    });
  });

  describe('(Method) handleChange', () => {
    it('calls setState', () => {
      const mockEvent = {
        target: {
          value: 'hound',
        },
      };
      component = new DogsBreedSearchContainer(defaultProps);
      const setStateStub = jest.fn();
      component.setState = setStateStub;
      component.handleChange(mockEvent);

      expect(setStateStub).toBeCalledWith({ dogsBreedValue: 'hound' });
    });
  });

  describe('(Method) findBreedName', () => {
    it('returns the first supported dog breed that it finds in the user input', () => {
      const props = {
        ...defaultProps,
        breedIsSupported: jest.fn().mockReturnValue(true),
      };
      component = new DogsBreedSearchContainer(props);
      expect(component.findBreedName('boxer hound')).toEqual('boxer');
    });

    it('returns an empty string if there is no supported dog breed in user input', () => {
      const props = {
        ...defaultProps,
        breedIsSupported: jest.fn().mockReturnValue(false),
      };
      component = new DogsBreedSearchContainer(props);
      expect(component.findBreedName('boxer-hound!! ')).toEqual('');
    });
  });

  describe('(Method) handleSubmit', () => {
    it('calls findBreedName with user input lowered case', () => {
      const mockEvent = {
        preventDefault: jest.fn(),
      };
      const mockState = {
        dogsBreedValue: 'Hound Boxer',
      };
      const findBreedNameStub = jest.fn();
      const setStateSpy = jest.fn();
      component = new DogsBreedSearchContainer(defaultProps);
      component.state = mockState;
      component.setState = setStateSpy;
      component.findBreedName = findBreedNameStub;
      component.handleSubmit(mockEvent);

      expect(findBreedNameStub).toHaveBeenCalledWith('hound boxer');
    });

    it('should call clearSearchInput and handleError, but does not call neither imagesLimitReset, nor fetchDogsBreed when breedName is invalid', () => {
      const mockEvent = {
        preventDefault: jest.fn(),
      };
      const mockState = {
        dogsBreedValue: 'testHound',
      };
      const props = {
        ...defaultProps,
        fetchDogsBreed: jest.fn().mockResolvedValue({}),
        imagesLimitReset: jest.fn(),
      };
      component = new DogsBreedSearchContainer(props);
      const clearSearchInputSpy = jest.fn();
      const setStateSpy = jest.fn();
      const handleErrorSpy = jest.fn();
      component.clearSearchInput = clearSearchInputSpy;
      component.state = mockState;
      component.setState = setStateSpy;
      component.handleError = handleErrorSpy;
      component.findBreedName = jest.fn().mockReturnValue('');
      component.handleSubmit(mockEvent);

      // It calls the following
      expect(clearSearchInputSpy).toHaveBeenCalled();
      expect(handleErrorSpy).toHaveBeenCalled();

      // It does not call the following
      expect(props.imagesLimitReset).not.toHaveBeenCalled();
      expect(props.fetchDogsBreed).not.toHaveBeenCalled();
    });

    it('calls imagesLimitReset, fetchDogsBreed, and clearSearchInput when breedName is valid', () => {
      const mockEvent = {
        preventDefault: jest.fn(),
      };
      const mockState = {
        dogsBreedValue: 'Boxer Hound',
      };
      const props = {
        ...defaultProps,
        fetchDogsBreed: jest.fn().mockResolvedValue({}),
        imagesLimitReset: jest.fn(),
      };
      component = new DogsBreedSearchContainer(props);
      component.prevBreedValue = 'test';
      const clearSearchInputSpy = jest.fn();
      const setStateSpy = jest.fn();
      component.setState = setStateSpy;
      component.clearSearchInput = clearSearchInputSpy;
      component.findBreedName = jest.fn().mockReturnValue('boxer');
      component.state = mockState;
      component.handleSubmit(mockEvent);

      expect(clearSearchInputSpy).toHaveBeenCalled();
      expect(props.imagesLimitReset).toHaveBeenCalled();
      expect(props.fetchDogsBreed).toHaveBeenCalledWith('boxer');
    });

    it('calls setState on fetchDogsBreed success', () => {
      const mockEvent = {
        preventDefault: jest.fn(),
      };
      const mockState = {
        dogsBreedValue: 'testHound',
      };
      const props = {
        ...defaultProps,
        fetchDogsBreed: jest.fn().mockResolvedValue({}),
      };
      component = new DogsBreedSearchContainer(props);
      const setStateSpy = jest.fn();
      component.setState = setStateSpy;
      component.state = mockState;
      component.findBreedName = jest.fn().mockReturnValue('testhound');
      component.handleSubmit(mockEvent);

      return props.fetchDogsBreed()
        .then(() => {
          expect(setStateSpy).toHaveBeenCalledWith({ hasError: false });
        });
    });
  });
});
