import { styled, Toolbar, Typography } from '@material-ui/core';
import { getContent, getHeader, getSidebarTrigger } from '@mui-treasury/layout';
import React, { FC } from 'react';

// #region styles
export const Content = styled(getContent(styled))(({ theme }) => ({
  background: theme.palette.background.default,
  height: 'calc(100% - 64px)',
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'auto',
}));

export const AppToolbar = styled(Toolbar)(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  [theme.breakpoints.down('sm')]: {
    minHeight: 56,
  },
}));
// #endregion

const Header = getHeader(styled);
const SidebarTrigger = getSidebarTrigger(styled);

interface Props {
  toolbar?: React.ReactNode;
  title?: string;
}

export const PageWrapper: FC<Props> = ({ title, toolbar, children }) => (
  <>
    <Header elevation={1}>
      <AppToolbar>
        <SidebarTrigger sidebarId="primarySidebar" />
        {toolbar || <Typography variant="h6">{title}</Typography>}
      </AppToolbar>
    </Header>

    <Content>
      {children}
    </Content>
  </>
);
