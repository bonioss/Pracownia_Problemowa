import { styled, Toolbar, Typography } from '@material-ui/core';
import { getContent, getHeader, getSidebarTrigger } from '@mui-treasury/layout';
import React, { FC } from 'react';

// #region styles
const Content = styled(getContent(styled))(({ theme }) => ({
  background: theme.palette.background.default,
  height: 'calc(100% - 64px)',
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'auto',
}));

const AppToolbar = styled(Toolbar)(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  [theme.breakpoints.down('sm')]: {
    minHeight: 56,
  },
}));
// #endregion

const Header = getHeader(styled);
const SidebarTrigger = getSidebarTrigger(styled);

/** Właściwości komponentu wrappera podstrony */
export interface Props {
  /** Komponent paska narzędzi */
  toolbar?: React.ReactNode;
  /** Tytuł */
  title?: string;
}

/**
 * Komponent wrappera podstrony
 * @param props Właściwości komponentu
 * @component
 */
export const PageWrapper: FC<Props> = props => {
  const { title, toolbar, children } = props;
  return (
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
};
