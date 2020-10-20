import { Divider, List } from '@material-ui/core';
import { ParentUser } from 'api/auth';
import React, { FC } from 'react';
import InboxIcon from '@material-ui/icons/Inbox';
import TestIcon from '@material-ui/icons/ChildCare';
import { DrawerHeader } from './DrawerHeader';
import { DrawerItem } from './DrawerItem';

interface Props {
  user: ParentUser;
}

export const ParentDrawer: FC<Props> = ({ user }) => (
  <>
    <DrawerHeader name={`${user.firstName} ${user.lastName}`} email={user.email} />

    <Divider />

    <List component="nav">
      <DrawerItem name="Test" icon={InboxIcon} to="/test" />
      <DrawerItem name="Moje dzieci" icon={TestIcon} to="/dzieci" />
    </List>
  </>
);
