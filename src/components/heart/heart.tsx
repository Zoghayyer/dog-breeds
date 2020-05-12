import React, { FC } from 'react'
import styled from '@emotion/styled'
import { icons } from '../../static';

interface Props {
  icon: string
  alt: string
};

const Heart: FC<Props> = ({ icon, alt }) => (
  <HeartIcon src={icons[icon]} alt={alt} />
);

const HeartIcon = styled.img({
  width: '17px',
  height: '15px',
  alignSelf: 'center',
});

export default Heart;
