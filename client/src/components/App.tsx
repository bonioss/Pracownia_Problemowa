import {
  CssBaseline, Divider, List, styled, ThemeProvider,
} from '@material-ui/core';
import LogoutIcon from '@material-ui/icons/ExitToApp';
import { getSidebarContent, getDrawerSidebar, Root } from '@mui-treasury/layout';
import { AxiosError } from 'axios';
import { pl } from 'date-fns/locale';
import { AddAgencyPage } from 'pages/AddAgencyPage';
import { AddKidPage } from 'pages/AddKidPage';
import { AddMealPage } from 'pages/AddMealPage';
import { AddParentKidPage } from 'pages/AddParentKidPage';
import { AgenciesPage } from 'pages/AgenciesPage';
import { AgencyPage } from 'pages/AgencyPage';
import { EmptyPage } from 'pages/EmptyPage';
import { KidsPage } from 'pages/KidsPage';
import { LogoutPage } from 'pages/LogoutPage';
import { MenuPage } from 'pages/MenuPage';
import { OrderPage } from 'pages/OrderPage';
import { OrdersPage } from 'pages/OrdersPage';
import { ParentKidsPage } from 'pages/ParentKidsPage';
import { ParentOrdersPage } from 'pages/ParentOrdersPage';
import { PlaceOrderPage } from 'pages/PlaceOrderPage';
import React from 'react';
import { ReactQueryConfig, ReactQueryConfigProvider } from 'react-query';
import { lightTheme, darkTheme } from 'theme';
import { useAuth, useSetAuth } from 'utils/authState';
import { ReactComponent as PracowniaPosilkow } from 'assets/pracownia_posilkow.svg';
import { LocalizationProvider } from '@material-ui/pickers';
import { LoginPage } from 'pages/LoginPage';
import { RegisterPage } from 'pages/RegistryPage';
import {
  BrowserRouter, Route, Redirect, Switch,
} from 'react-router-dom';
import DateFnsUtils from '@material-ui/pickers/adapter/date-fns';
import layout from 'utils/layout';
import { AdminStatsPage } from 'pages/AdminStatsPage';
import { AdminDrawer } from './AdminDrawer';
import { AgencyDrawer } from './AgencyDrawer';
import { DrawerItem } from './DrawerItem';
import { GuardedRoute } from './GuardedRoute';
import { ParentDrawer } from './ParentDrawer';
import { UserChecker } from './UserChecker';

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
        if (err.response?.status === 401 || err.response?.status === 404) return false;
        return (count < 2);
      },
    },
  }), []);

  return (
    <ReactQueryConfigProvider config={reactQueryConfig}>
      <UserChecker />
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
                    {user.role === 'admin' ? <Route path="/" exact><Redirect to="/statystyki" /></Route> : null}
                    {['parent', 'agency'].includes(user.role) ? <Route path="/" exact><Redirect to="/zamowienia" /></Route> : null}
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
                    <GuardedRoute path="/dzieci/nowe-dziecko" component={AddKidPage} roles={['agency']} />
                    <GuardedRoute path="/dzieci" component={KidsPage} roles={['agency']} />
                    <GuardedRoute path="/parent-dzieci/dodaj-dziecko" component={AddParentKidPage} roles={['parent']} />
                    <GuardedRoute path="/parent-dzieci" component={ParentKidsPage} roles={['parent']} />
                    <GuardedRoute path="/statystyki" component={AdminStatsPage} roles={['admin']} />
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
