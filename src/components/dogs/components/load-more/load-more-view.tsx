import React from 'react';
import styled from '@emotion/styled';
import Button from '../../../button';

export interface LoadMoreViewProps {
  handleClick: () => (void);
}

const LoadMoreView: React.FC<LoadMoreViewProps> = ({ handleClick }) => (
  <LoadMoreViewSection>
    <Button
      type="button"
      onClick={handleClick}
      className="load-more-button"
    >
    Load More
    </Button>
  </LoadMoreViewSection>
);

const LoadMoreViewSection = styled.div({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '10px',
});

export default LoadMoreView;
