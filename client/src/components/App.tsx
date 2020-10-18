import { styled, ThemeProvider } from '@material-ui/core';
import React from 'react';
import { LoginPage } from 'pages/LoginPage';
import { theme as appTheme } from 'theme';
import {
  Route, Switch, BrowserRouter, Redirect,
} from 'react-router-dom';
import { useAuth } from 'utils/authState';

const Container = styled('div')(({ theme }) => ({
  background: theme.palette.background.default,
}));

const App = () => {
  const { user } = useAuth();

  return (
    <ThemeProvider theme={appTheme}>
      <Container>
        <BrowserRouter>
          {!user && (
            <Switch>
              <Route path="/rejestracja" render={() => 'Rejestracja'} />
              <Route path="/logowanie"><LoginPage /></Route>
              <Route><Redirect to="/logowanie" /></Route>
            </Switch>
          )}

          {user && (
            <Switch>
              <Route render={() => `Hi ${user.name}!`} />
            </Switch>
          )}
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
};

export default App;
