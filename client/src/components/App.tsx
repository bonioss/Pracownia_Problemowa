import {
  CssBaseline, Divider, List, styled, ThemeProvider,
} from '@material-ui/core';
import React from 'react';
import { LoginPage } from 'pages/LoginPage';
import {
  Route, Switch, BrowserRouter, Redirect,
} from 'react-router-dom';
import { useAuth } from 'utils/authState';
import {
  Root, getDrawerSidebar, getSidebarContent,
} from '@mui-treasury/layout';
import layout from 'utils/layout';
import InboxIcon from '@material-ui/icons/Inbox';
import { ReactComponent as PracowniaPosilkow } from 'assets/pracownia_posilkow.svg';
import { TestPage } from 'pages/TestPage';
import { darkTheme, lightTheme } from 'theme';
import LogoutIcon from '@material-ui/icons/ExitToApp';
import TestIcon from '@material-ui/icons/ChildCare';
import { LogoutPage } from 'pages/LogoutPage';
import { DrawerHeader } from './DrawerHeader';
import { DrawerItem } from './DrawerItem';
import { AdminDrawer } from './AdminDrawer';
import { AgencyDrawer } from './AgencyDrawer';
import { ParentDrawer } from './ParentDrawer';
import { UserRoutes } from './UserRoutes';
import { GuestRoutes } from './GuestRoutes';

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

              <UserRoutes user={user} />
            </Root>
          </ThemeProvider>
        )}

        {!user && (
          <ThemeProvider theme={darkTheme}>
            <GuestRoutes />
          </ThemeProvider>
        )}
      </BrowserRouter>
    </Container>
  );
};

export default App;
