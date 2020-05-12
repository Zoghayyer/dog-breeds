import React, { FC } from 'react';
import { hot } from 'react-hot-loader/root';
import Dogs from '../dogs';

const App: FC = () => (
  <div id="app-content">
    <Dogs />
  </div>
);

export default hot(App);
