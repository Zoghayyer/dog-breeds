import React, { FC } from 'react';
import './separator.scss';

export interface SeparatorProps {
  type: 'horizontal' | 'vertical';
}

const Separator: FC<SeparatorProps> = ({ type }) => (
  <div className={`${type}-separator`}></div>
);

export default Separator;
