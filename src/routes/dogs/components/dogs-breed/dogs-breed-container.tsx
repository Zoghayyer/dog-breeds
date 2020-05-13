import React from 'react';
import { connect } from 'react-redux';
import { dogsBreedFavoriteToggle } from '../../../../modules/dogs-breed';
import DogsBreedView from './dogs-breed-view';
import Loader from '../../../../components/loader';

export interface DispatchProps {
  favoriteToggle: (id: number) => (void);
}

export interface OwnProps {
  dogs: Dog[];
  isLoading?: boolean;
}

const mapDisptachToProps = {
  favoriteToggle: dogsBreedFavoriteToggle,
};

export class DogsBreedContainer extends React.Component<DispatchProps & OwnProps> {
  public handleClickFavorite = (id: number) => {
    const { favoriteToggle } = this.props;
    favoriteToggle(id);
  }

  public render = () => {
    if (this.props.isLoading) {
      return <Loader size="sm" className="mt-4" />;
    }

    return (
      <DogsBreedView
        dogs={this.props.dogs}
        handleClickFavorite={this.handleClickFavorite}
      />
    );
  }
}

export default connect(null, mapDisptachToProps)(DogsBreedContainer);
