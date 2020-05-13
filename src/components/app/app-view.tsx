import React, { FC } from 'react';
import Core from '../core';
import { Router } from 'react-router-dom';
import { History } from 'history';

export interface AppViewProps {
  history: History;
}

const AppView: FC<AppViewProps> = (props) => (
  <Router history={props.history}>
    <Core />
  </Router>
);

export default AppView;
