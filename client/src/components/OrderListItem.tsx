import {
  ListItem, ListItemAvatar, Avatar, ListItemText,
} from '@material-ui/core';
import AgencyIcon from '@material-ui/icons/Business';
import { Order } from 'api/orders';
import React, { FC } from 'react';
import { format } from 'utils/dateFns';

interface Props {
  data: Order;
  onClick?: () => void;
}

export const OrderListItem: FC<Props> = ({ data, onClick }) => (
  <ListItem button onClick={onClick}>
    <ListItemAvatar>
      <Avatar>
        <AgencyIcon />
      </Avatar>
    </ListItemAvatar>

    <ListItemText
      primary={`Zamówienie z dnia ${format(new Date(data.startDate), 'dd.MM.yyyy')}`}
      secondary={`Koszt zamówienia: ${data.price}zł`}
    />
  </ListItem>
);
