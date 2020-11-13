import { Divider, List } from '@material-ui/core';
import { AgencyUser } from 'api/auth';
import React, { FC } from 'react';
import TestIcon from '@material-ui/icons/ChildCare';
import MenuIcon from '@material-ui/icons/RestaurantMenu';
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
      <DrawerItem name="Jadłospis" icon={MenuIcon} to="/jadlospis" />
      <DrawerItem name="Moje dzieci" icon={TestIcon} to="/dzieci" />
      <DrawerItem name="[WIP] Nowe zamówienie" icon={TestIcon} to="/zamowienia/nowe" />
    </List>
  </>
);
