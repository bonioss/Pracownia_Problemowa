import { Divider, List } from '@material-ui/core';
import { ParentUser } from 'api/auth';
import React, { FC } from 'react';
import TestIcon from '@material-ui/icons/ChildCare';
import MenuIcon from '@material-ui/icons/RestaurantMenu';
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
      <DrawerItem name="Jadłospis" icon={MenuIcon} to="/jadlospis" />
      <DrawerItem name="Moje dzieci" icon={TestIcon} to="/dzieci" />
      <DrawerItem name="Zamówienia" icon={TestIcon} to="/zamowienia" />
    </List>
  </>
);
