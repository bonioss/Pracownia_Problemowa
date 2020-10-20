import { Divider, List } from '@material-ui/core';
import { AdminUser } from 'api/auth';
import React, { FC } from 'react';
import AgencyIcon from '@material-ui/icons/Business';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { DrawerHeader } from './DrawerHeader';
import { DrawerItem } from './DrawerItem';

interface Props {
  user: AdminUser;
}

export const AdminDrawer: FC<Props> = ({ user }) => (
  <>
    <DrawerHeader name={`${user.firstName} ${user.lastName}`} email={user.email} />

    <Divider />

    <List component="nav">
      <DrawerItem name="Dashboard" icon={DashboardIcon} to="/" />
      <DrawerItem name="Placówki" icon={AgencyIcon} to="/placowki" />
    </List>
  </>
);
