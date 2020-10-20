import { LoginPage } from 'pages/LoginPage';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

export const GuestRoutes = () => (
  <Switch>
    <Route path="/logowanie"><LoginPage /></Route>
    <Route><Redirect to="/logowanie" /></Route>
  </Switch>
);
