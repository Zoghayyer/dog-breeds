import React, { FC } from 'react';
import styled from '@emotion/styled';
import { icons } from '../../assets';

export interface IconProps {
  alt: string;
  icon: string;
  onClick?: () => (void);
  style?: any;
}

const Icon: FC<IconProps> = ({ alt, style, icon, onClick }) => (
  <Image
    alt={alt}
    className="img-icon"
    onClick={onClick}
    src={icons[icon]}
    style={style}
  />
);

const Image = styled.img({
  alignSelf: 'center',
  height: '15px',
  width: '17px',
});

export default Icon;
