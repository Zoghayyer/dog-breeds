import React from 'react';
import { connect } from 'react-redux';
import {
  dogsBreedDogs,
  dogsBreedDogsFavorite,
  dogsBreedRequestGetIsLoading,
  dogsBreedsAllGetIsLoading,
  dogsBreedsAllRequestGet,
  dogsBreedShowLoadMore,
} from '../../modules/dogs-breed';
import DogsView from './dogs-view';
import Loader from '../../components/loader';

export interface StateProps {
  dogsBreedDogs: Dog[];
  dogsBreedRequestGetIsLoading: boolean;
  dogsBreedsAllGetIsLoading: boolean;
  favoriteDogs: Dog[];
  showLoadMore: boolean;
}

export interface DispatchProps {
  dogsBreedsAllRequestGet: () => (void);
}

const mapStateToProps = (state: ApplicationShape) => ({
  dogsBreedDogs: dogsBreedDogs(state),
  dogsBreedRequestGetIsLoading: dogsBreedRequestGetIsLoading(state),
  dogsBreedsAllGetIsLoading: dogsBreedsAllGetIsLoading(state),
  favoriteDogs: dogsBreedDogsFavorite(state),
  showLoadMore: dogsBreedShowLoadMore(state),
});

const mapDispatchToProps = {
  dogsBreedsAllRequestGet,
};

export class DogsContainer extends React.Component<StateProps & DispatchProps> {
  public componentDidMount = () => {
    // Get all of the supported dogs breeds so that we can validate users' search against it.
    return this.props.dogsBreedsAllRequestGet();
  }

  private showLoadMore = () => this.props.showLoadMore && !this.props.dogsBreedRequestGetIsLoading;

  public render = () => {
    if (this.props.dogsBreedsAllGetIsLoading) {
      return <Loader className="loader-container" />;
    }

    return (
      <DogsView
        dogsBreedDogs={this.props.dogsBreedDogs}
        favoriteDogs={this.props.favoriteDogs}
        isLoading={this.props.dogsBreedRequestGetIsLoading}
        showLoadMore={this.showLoadMore()}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DogsContainer);
