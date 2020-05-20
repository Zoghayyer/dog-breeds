import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../../assets/colors';

export interface LoaderProps {
  className?: string;
  style?: any;
}

const Loader: React.FC<LoaderProps> = ({ className, style }) => (
  <LoaderContainer className="loader">
    <div style={style} className={className}>Loading...</div>
  </LoaderContainer>
);

const LoaderContainer = styled.div({
  color: colors.cornflowerBlue,
  display: 'flex',
  justifyContent: 'center',
});

export default Loader;
