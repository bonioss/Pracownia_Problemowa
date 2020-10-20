import { User } from 'api/auth';
import { LogoutPage } from 'pages/LogoutPage';
import { TestPage } from 'pages/TestPage';
import React, { FC } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

interface Props {
  user: User;
}

export const UserRoutes: FC<Props> = ({ user }) => (
  <Switch>
    {/* Admin routes */}
    {user.role === 'admin' && (
    <></>
    )}

    {/* Parent routes */}
    {user.role === 'parent' && (
    <></>
    )}

    {/* Agency routes */}
    {user.role === 'agency' && (
    <></>
    )}

    {/* Common routes */}
    <Route path={['/logowanie', '/rejestracja']}><Redirect to="/" /></Route>
    <Route path="/wyloguj" component={LogoutPage} />
    <Route component={TestPage} />
  </Switch>
);
