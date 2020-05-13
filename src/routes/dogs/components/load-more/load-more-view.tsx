import React from 'react';
import Button from '../../../../components/button';

export interface LoadMoreViewProps {
  handleClick: () => (void);
}

const LoadMoreView: React.FC<LoadMoreViewProps> = ({ handleClick }) => (
  <div className="d-flex justify-content-center mt-3">
    <Button
      type="button"
      theme="primary"
      onClick={handleClick}
      className="load-more-button"
    >
    Load More
    </Button>
  </div>
);

export default LoadMoreView;
