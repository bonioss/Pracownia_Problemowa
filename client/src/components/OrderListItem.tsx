import {
  ListItem, ListItemAvatar, Avatar, ListItemText,
} from '@material-ui/core';
import { Order } from 'api/orders';
import React, { FC } from 'react';
import { format } from 'utils/dateFns';
import OrdersIcon from '@material-ui/icons/ListAlt';

interface Props {
  data: Order;
  onClick?: () => void;
}

export const OrderListItem: FC<Props> = ({ data, onClick }) => (
  <ListItem button onClick={onClick}>
    <ListItemAvatar>
      <Avatar>
        <OrdersIcon />
      </Avatar>
    </ListItemAvatar>

    <ListItemText
      primary={`Zamówienie z dnia ${format(new Date(data.startDate), 'dd.MM.yyyy')}`}
      secondary={data.paid ? 'Opłacone' : `Do zapłacenia: ${data.price}zł`}
    />
  </ListItem>
);
