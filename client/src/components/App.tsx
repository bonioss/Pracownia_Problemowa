import {
  CssBaseline, Divider, List, styled, ThemeProvider,
} from '@material-ui/core';
import React from 'react';
import {
  Switch, BrowserRouter, Route, Redirect,
} from 'react-router-dom';
import { useAuth } from 'utils/authState';
import { Root, getDrawerSidebar, getSidebarContent } from '@mui-treasury/layout';
import layout from 'utils/layout';
import { ReactComponent as PracowniaPosilkow } from 'assets/pracownia_posilkow.svg';
import { darkTheme, lightTheme } from 'theme';
import LogoutIcon from '@material-ui/icons/ExitToApp';
import { LogoutPage } from 'pages/LogoutPage';
import { TestPage } from 'pages/TestPage';
import { LoginPage } from 'pages/LoginPage';
import { DrawerItem } from './DrawerItem';
import { AdminDrawer } from './AdminDrawer';
import { AgencyDrawer } from './AgencyDrawer';
import { ParentDrawer } from './ParentDrawer';

// #region styles
const Container = styled('div')(({ theme }) => ({
  background: theme.palette.background.default,
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

  return (
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
                <Route component={TestPage} />
              </Switch>
            </Root>
          </ThemeProvider>
        )}

        {!user && (
          <ThemeProvider theme={darkTheme}>
            <Switch>
              <Route path="/logowanie"><LoginPage /></Route>
              <Route><Redirect to="/logowanie" /></Route>
            </Switch>
          </ThemeProvider>
        )}
      </BrowserRouter>
    </Container>
  );
};

export default App;
