import {
  CssBaseline, Divider, List, styled, ThemeProvider,
} from '@material-ui/core';
import LogoutIcon from '@material-ui/icons/ExitToApp';
import DateFnsUtils from '@material-ui/pickers/adapter/date-fns';
import LocalizationProvider from '@material-ui/pickers/LocalizationProvider';
import { getDrawerSidebar, getSidebarContent, Root } from '@mui-treasury/layout';
import { ReactComponent as PracowniaPosilkow } from 'assets/pracownia_posilkow.svg';
import { pl } from 'date-fns/locale';
import { AddAgencyPage } from 'pages/AddAgencyPage';
import { AddKidPage } from 'pages/AddKidPage';
import { AddMealPage } from 'pages/AddMealPage';
import { AddParentKidPage } from 'pages/AddParentKidPage';
import { AgenciesPage } from 'pages/AgenciesPage';
import { AgencyPage } from 'pages/AgencyPage';
import { EmptyPage } from 'pages/EmptyPage';
import { KidsPage } from 'pages/KidsPage';
import { LoginPage } from 'pages/LoginPage';
import { LogoutPage } from 'pages/LogoutPage';
import { MenuPage } from 'pages/MenuPage';
import { ParentKidsPage } from 'pages/ParentKidsPage';
import { RegisterPage } from 'pages/RegistryPage';
import React from 'react';
import { ReactQueryConfig, ReactQueryConfigProvider } from 'react-query';
import {
  BrowserRouter, Redirect, Route, Switch,
} from 'react-router-dom';
import { darkTheme, lightTheme } from 'theme';
import { useAuth } from 'utils/authState';
import layout from 'utils/layout';
import { AdminDrawer } from './AdminDrawer';
import { AgencyDrawer } from './AgencyDrawer';
import { DrawerItem } from './DrawerItem';
import { GuardedRoute } from './GuardedRoute';
import { ParentDrawer } from './ParentDrawer';

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

  const reactQueryConfig: ReactQueryConfig = React.useMemo(() => ({
    queries: {
      queryFnParamsFilter: args => args.slice(1),
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
                    <GuardedRoute path="/dzieci/nowe-dziecko" component={AddKidPage} roles={['agency']} />
                    <GuardedRoute path="/dzieci" component={KidsPage} roles={['agency']} />
                    <GuardedRoute path="/parent-dzieci/dodaj-dziecko" component={AddParentKidPage} roles={['parent']} />
                    <GuardedRoute path="/parent-dzieci" component={ParentKidsPage} roles={['parent']} />
                    <Route path="/jadlospis" component={MenuPage} />
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
