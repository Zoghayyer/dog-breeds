import React, { FC } from 'react';

export interface HeaderProps {
  children: any;
  style?: any;
}

const Header: FC<HeaderProps> = ({ children, style }) => (
  <div style={style}>
    {children}
  </div>
);

export default Header;
