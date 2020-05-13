import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/create-store';
import App from './components/app';
import './styles/core.scss';

const MOUNT_NODE = document.getElementById('root');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  MOUNT_NODE,
);
