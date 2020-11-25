import {
  CssBaseline, Divider, List, styled, ThemeProvider,
} from '@material-ui/core';
import React from 'react';
import {
  Switch, BrowserRouter, Route, Redirect,
} from 'react-router-dom';
import { useAuth, useSetAuth } from 'utils/authState';
import { Root, getDrawerSidebar, getSidebarContent } from '@mui-treasury/layout';
import layout from 'utils/layout';
import { ReactComponent as PracowniaPosilkow } from 'assets/pracownia_posilkow.svg';
import { darkTheme, lightTheme } from 'theme';
import LogoutIcon from '@material-ui/icons/ExitToApp';
import { LogoutPage } from 'pages/LogoutPage';
import { LoginPage } from 'pages/LoginPage';
import { RegisterPage } from 'pages/RegistryPage';
import { EmptyPage } from 'pages/EmptyPage';
import { AgenciesPage } from 'pages/AgenciesPage';
import { AddAgencyPage } from 'pages/AddAgencyPage';
import { AgencyPage } from 'pages/AgencyPage';
import { ReactQueryConfig, ReactQueryConfigProvider } from 'react-query';
import LocalizationProvider from '@material-ui/pickers/LocalizationProvider';
import DateFnsUtils from '@material-ui/pickers/adapter/date-fns';
import { MenuPage } from 'pages/MenuPage';
import { pl } from 'date-fns/locale';
import { AddMealPage } from 'pages/AddMealPage';
import { PlaceOrderPage } from 'pages/PlaceOrderPage';
import { OrderPage } from 'pages/OrderPage';
import { AxiosError } from 'axios';
import { OrdersPage } from 'pages/OrdersPage';
import { ParentOrdersPage } from 'pages/ParentOrdersPage';
import { DrawerItem } from './DrawerItem';
import { AdminDrawer } from './AdminDrawer';
import { AgencyDrawer } from './AgencyDrawer';
import { ParentDrawer } from './ParentDrawer';
import { GuardedRoute } from './GuardedRoute';

// #region styles
const Container = styled('div')(({ theme }) => ({
  background: theme.palette.background.default,
  height: '100vh',
}));

const DrawerLogo = styled(PracowniaPosilkow)(({ theme }) => ({
  margin: 16,
  marginBottom: 8,
  color: theme.palette.primary.main,
}));

const SidebarContent = styled(getSidebarContent(styled))({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
});
// #endregion

const App = () => {
  const DrawerSidebar = getDrawerSidebar(styled);
  const { user } = useAuth();
  const setAuth = useSetAuth();

  const reactQueryConfig: ReactQueryConfig = React.useMemo(() => ({
    queries: {
      queryFnParamsFilter: args => args.slice(1),
      onError: error => {
        const err = error as AxiosError;
        if (err.response?.status === 401) setAuth({ user: undefined });
      },
      retry: (count, error) => {
        const err = error as AxiosError;
        if (err.response?.status === 401) return false;
        return (count < 2);
      },
    },
  }), []);

  return (
    <ReactQueryConfigProvider config={reactQueryConfig}>
      <LocalizationProvider dateAdapter={DateFnsUtils} locale={pl}>
        <Container>
          <CssBaseline />
          <BrowserRouter>
            {user && (
            <ThemeProvider theme={lightTheme}>
              <Root scheme={layout} theme={lightTheme}>
                <DrawerSidebar sidebarId="primarySidebar">
                  <SidebarContent>
                    <DrawerLogo />

                    {user.role === 'admin' && <AdminDrawer user={user} />}
                    {user.role === 'agency' && <AgencyDrawer user={user} />}
                    {user.role === 'parent' && <ParentDrawer user={user} />}

                    <div style={{ flex: 1 }} />

                    <Divider />

                    <List component="nav">
                      <DrawerItem name="Wyloguj" icon={LogoutIcon} to="/wyloguj" />
                    </List>
                  </SidebarContent>
                </DrawerSidebar>

                <Switch>
                  <Route path={['/logowanie', '/rejestracja']}><Redirect to="/" /></Route>
                  <Route path="/wyloguj" component={LogoutPage} />
                  <GuardedRoute path="/placowki/nowa" component={AddAgencyPage} roles={['admin']} />
                  <GuardedRoute path="/placowki/:code" component={AgencyPage} roles={['admin']} />
                  <GuardedRoute path="/placowki" component={AgenciesPage} roles={['admin']} />
                  <GuardedRoute path="/jadlospis/nowe-danie" component={AddMealPage} roles={['admin']} />
                  <Route path="/jadlospis" component={MenuPage} />
                  <GuardedRoute path="/zamowienia/nowe" component={PlaceOrderPage} roles={['agency', 'parent']} />
                  <Route path="/zamowienia/:id" component={OrderPage} />
                  {user.role === 'agency' ? <GuardedRoute path="/zamowienia" component={OrdersPage} roles={['agency']} /> : null}
                  {user.role === 'parent' ? <GuardedRoute path="/zamowienia" component={ParentOrdersPage} roles={['parent']} /> : null}
                  <Route component={EmptyPage} />
                </Switch>
              </Root>
            </ThemeProvider>
            )}

            {!user && (
            <ThemeProvider theme={darkTheme}>
              <Switch>
                <Route path="/logowanie"><LoginPage /></Route>
                <Route path="/rejestracja"><RegisterPage /></Route>
                <Route><Redirect to="/logowanie" /></Route>
              </Switch>
            </ThemeProvider>
            )}
          </BrowserRouter>
        </Container>
      </LocalizationProvider>
    </ReactQueryConfigProvider>
  );
};

export default App;
