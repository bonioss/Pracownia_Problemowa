import { Divider, List } from '@material-ui/core';
import { AdminUser } from 'api/auth';
import React, { FC } from 'react';
import AgencyIcon from '@material-ui/icons/Business';
import StatsIcon from '@material-ui/icons/BarChart';
import MenuIcon from '@material-ui/icons/RestaurantMenu';
import { DrawerHeader } from './DrawerHeader';
import { DrawerItem } from './DrawerItem';

export interface Props {
  /** Obiekt użytkownika */
  user: AdminUser;
}

/**
 * Panel boczny administratora
 * @param props Właściwości panelu
 * @component
 */
export const AdminDrawer: FC<Props> = props => {
  const { user } = props;
  return (
    <>
      <DrawerHeader name={`${user.firstName} ${user.lastName}`} email={user.email} />

      <Divider />

      <List component="nav">
        <DrawerItem name="Jadłospis" icon={MenuIcon} to="/jadlospis" exact={false} />
        <DrawerItem name="Placówki" icon={AgencyIcon} to="/placowki" exact={false} />
        <DrawerItem name="Statystyki" icon={StatsIcon} to="/statystyki" exact={false} />
      </List>
    </>
  );
};
