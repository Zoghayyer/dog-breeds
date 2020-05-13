import React, { FC } from 'react';

export interface HeaderProps {
  children: any;
  className?: string;
}

const Header: FC<HeaderProps> = (props) => (
  <div className={props.className}>
    {props.children}
  </div>
);

export default Header;
