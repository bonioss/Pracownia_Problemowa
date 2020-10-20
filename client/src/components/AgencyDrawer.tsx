import { Divider, List } from '@material-ui/core';
import { AgencyUser } from 'api/auth';
import React, { FC } from 'react';
import InboxIcon from '@material-ui/icons/Inbox';
import TestIcon from '@material-ui/icons/ChildCare';
import { DrawerHeader } from './DrawerHeader';
import { DrawerItem } from './DrawerItem';

interface Props {
  user: AgencyUser;
}

export const AgencyDrawer: FC<Props> = ({ user }) => (
  <>
    <DrawerHeader name={user.name} />

    <Divider />

    <List component="nav">
      <DrawerItem name="Test" icon={InboxIcon} to="/test" />
      <DrawerItem name="Moje dzieci" icon={TestIcon} to="/dzieci" />
    </List>
  </>
);
