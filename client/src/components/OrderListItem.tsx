import {
  ListItem, ListItemAvatar, Avatar, ListItemText,
} from '@material-ui/core';
import { Order } from 'api/orders';
import React, { FC } from 'react';
import { format } from 'utils/dateFns';
import OrdersIcon from '@material-ui/icons/ListAlt';

/** Właściwości komponentu elementu listy zamówień */
export interface Props {
  /** Obiekt zamówienia */
  data: Order;
  /** Funkcja uruchamiana po kliknięciu */
  onClick?: () => void;
}

/**
 * Komponent elementu listy zamówień
 * @param props Właściwości komponentu
 * @component
 */
export const OrderListItem: FC<Props> = props => {
  const { data, onClick } = props;
  return (
    <ListItem button onClick={onClick}>
      <ListItemAvatar>
        <Avatar>
          <OrdersIcon />
        </Avatar>
      </ListItemAvatar>

      {data.kid !== undefined ? (
        <ListItemText
          primary={`Zamówienie dla ${data.kid.firstName} ${data.kid.lastName} z dnia ${format(new Date(data.startDate), 'dd.MM.yyyy')}`}
          secondary={data.paid ? 'Opłacone' : `Do zapłacenia: ${data.price}zł`}
        />
      ) : (
        <ListItemText
          primary={`Zamówienie z dnia ${format(new Date(data.startDate), 'dd.MM.yyyy')}`}
          secondary={data.paid ? 'Opłacone' : `Do zapłacenia: ${data.price}zł`}
        />
      )}
    </ListItem>
  );
};
