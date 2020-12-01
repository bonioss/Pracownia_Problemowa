import { Divider, List } from '@material-ui/core';
import { AgencyUser } from 'api/auth';
import React, { FC } from 'react';
import TestIcon from '@material-ui/icons/ChildCare';
import OrdersIcon from '@material-ui/icons/ListAlt';
import MenuIcon from '@material-ui/icons/RestaurantMenu';
import { DrawerHeader } from './DrawerHeader';
import { DrawerItem } from './DrawerItem';

export interface Props {
  /** Obiekt użytkownika */
  user: AgencyUser;
}

/**
 * Panel boczny opiekuna placówki
 * @param __namedParameters Właściwości panelu
 * @component
 */
export const AgencyDrawer: FC<Props> = props => {
  const { user } = props;
  return (
    <>
      <DrawerHeader name={user.name} text={`Kod: ${user.agencyCode}`} />

      <Divider />

      <List component="nav">
        <DrawerItem name="Jadłospis" icon={MenuIcon} to="/jadlospis" exact={false} />
        <DrawerItem name="Podopieczni" icon={TestIcon} to="/dzieci" exact={false} />
        <DrawerItem name="Zamówienia" icon={OrdersIcon} to="/zamowienia" exact={false} />
      </List>
    </>
  );
};
