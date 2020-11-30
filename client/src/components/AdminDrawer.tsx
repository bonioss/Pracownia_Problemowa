import { Divider, List } from '@material-ui/core';
import { AdminUser } from 'api/auth';
import React, { FC } from 'react';
import AgencyIcon from '@material-ui/icons/Business';
import StatsIcon from '@material-ui/icons/BarChart';
import DashboardIcon from '@material-ui/icons/Dashboard';
import MenuIcon from '@material-ui/icons/RestaurantMenu';
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
      <DrawerItem name="Jadłospis" icon={MenuIcon} to="/jadlospis" exact={false} />
      <DrawerItem name="Placówki" icon={AgencyIcon} to="/placowki" exact={false} />
      <DrawerItem name="Statystyki" icon={StatsIcon} to="/statystyki" exact={false} />
    </List>
  </>
);
