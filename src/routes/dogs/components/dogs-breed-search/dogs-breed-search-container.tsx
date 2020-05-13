import React from 'react';
import { connect } from 'react-redux';
import {
  dogsBreedClear,
  dogsBreedImagesLimitReset,
  dogsBreedIsSupported,
  dogsBreedRequestGet,
} from '../../../../modules/dogs-breed';
import DogsBreedSearchView from './dogs-breed-search-view';

export interface DispatchProps {
  dogsBreedClear: () => (void);
  imagesLimitReset: () => (void);
  fetchDogsBreed: (dogsBreedValue: string) => (Promise<any>);
}

export interface StateProps {
  breedIsSupported: (word: string) => (void);
}

export interface State {
  dogsBreedValue: string;
  hasError: boolean;
}

const mapDisptachToProps = {
  dogsBreedClear,
  fetchDogsBreed: dogsBreedRequestGet,
  imagesLimitReset: dogsBreedImagesLimitReset,
};

const mapStateToProps = (state: ApplicationShape) => ({
  breedIsSupported: (word) => dogsBreedIsSupported(state, word),
});

export class DogsBreedSearchContainer extends React.Component<DispatchProps & StateProps, State> {
  public readonly state: Readonly<State> = {
    dogsBreedValue: '',
    hasError: false,
  };

  private clearSearchInput = () => this.setState({ dogsBreedValue: '' });

  private handleError = () => {
    this.setState({ hasError: true });
    this.props.dogsBreedClear();
  }

  private findBreedName = (userInput: string) => {
    // Split user input on space.
    const userInputSplit: string[] = userInput.split(' ');

    // Find and return the first dog breed from user's input; otherwise, return an empty string
    return userInputSplit.find((word) => this.props.breedIsSupported(word)) || '';
  }

  public handleSubmit = (event: MessageEvent) => {
    event.preventDefault();
    const { fetchDogsBreed, imagesLimitReset } = this.props;
    const { dogsBreedValue } = this.state;

    const breedName: string = this.findBreedName(dogsBreedValue.toLowerCase());

    if (!breedName) {
      this.clearSearchInput();
      this.handleError();
      return;
    }

    // Reset the images limit
    imagesLimitReset();

    fetchDogsBreed(breedName)
      .then(() => this.setState({ hasError: false }))
      .catch(this.handleError);

    this.clearSearchInput();
  }

  public handleChange = (event: MessageEvent) => {
    const target = event.target as HTMLTextAreaElement;
    const value = target.value;

    this.setState({
      dogsBreedValue: value,
    });
  }

  public render = () => (
    <DogsBreedSearchView
      handleSubmit={this.handleSubmit}
      handleChange={this.handleChange}
      dogsBreedValue={this.state.dogsBreedValue}
      hasError={this.state.hasError}
    />
  )
}

export default connect(mapStateToProps, mapDisptachToProps)(DogsBreedSearchContainer);
