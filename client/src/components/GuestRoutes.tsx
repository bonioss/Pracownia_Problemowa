import { LoginPage } from 'pages/LoginPage';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export const GuestRoutes = () => (
  <>
    <Route path="/logowanie"><LoginPage /></Route>
    <Route><Redirect to="/logowanie" /></Route>
  </>
);
