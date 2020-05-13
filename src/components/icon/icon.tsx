import React, { FC } from 'react';
import { icons } from '../../static';
import './icon.scss';

export interface IconProps {
  alt: string;
  className?: string;
  icon: string;
  onClick?: () => (void);
}

const Icon: FC<IconProps> = ({ icon, alt, className, onClick }) => (
  <img src={icons[icon]} alt={alt} className={`icon ${className}`} onClick={onClick} />
);

export default Icon;
