import {
  ListItem, ListItemAvatar, Avatar, ListItemText,
} from '@material-ui/core';
import AgencyIcon from '@material-ui/icons/Business';
import { Agency } from 'api/agencies';
import React, { FC } from 'react';
import { periodLabel } from 'utils/mappers';

export interface Props {
  /** Obiekt placówki */
  data: Agency;
  /** Funkcja uruchamiana po kliknięciu elementu */
  onClick?: () => void;
}

/**
 * Element listy placówek
 * @param props Właściwości elementu
 * @component
 */
export const AgencyListItem: FC<Props> = props => {
  const { data, onClick } = props;
  return (
    <ListItem button onClick={onClick}>
      <ListItemAvatar>
        <Avatar>
          <AgencyIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={data.name} secondary={`Okres zamówień: ${periodLabel(data.ordersPeriod)}`} />
    </ListItem>
  );
};
