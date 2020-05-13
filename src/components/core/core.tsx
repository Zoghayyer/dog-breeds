import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import NotFound from '../../routes/not-found';
import Dogs from '../../routes/dogs';

const CoreView: React.FC = () => (
  <div id="app-content" className="container-fluid">
    <Switch>
      <Route
        exact
        path="/"
        component={Dogs}
      />
      <Route
        component={NotFound}
      />
    </Switch>
  </div>
);

export default CoreView;
