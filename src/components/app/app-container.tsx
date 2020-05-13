import React, { FC } from 'react';
import { hot } from 'react-hot-loader/root';
import history from '../../lib/history';
import AppView from './app-view';

const App: FC = () => (
  <AppView history={history} />
);

export default hot(App);
