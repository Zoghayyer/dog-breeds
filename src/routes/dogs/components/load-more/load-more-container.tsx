import React from 'react';
import { connect } from 'react-redux';
import { dogsBreedImagesLimitIncrease } from '../../../../modules/dogs-breed';
import LoadMoreView from './load-more-view';

export interface DispatchProps {
  imagesLimitIncrease: () => (void);
}

const mapDisptachToProps = {
  imagesLimitIncrease: dogsBreedImagesLimitIncrease,
};

export class LoadMoreContainer extends React.Component<DispatchProps> {
  public handleClick = () => {
    const { imagesLimitIncrease } = this.props;
    imagesLimitIncrease();
  }

  public render = () => (
    <LoadMoreView
      handleClick={this.handleClick}
    />
  )
}

export default connect(null, mapDisptachToProps)(LoadMoreContainer);
