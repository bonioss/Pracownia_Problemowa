import {
  ListItem, ListItemAvatar, Avatar, ListItemText,
} from '@material-ui/core';
import AgencyIcon from '@material-ui/icons/Business';
import { Agency } from 'api/agencies';
import React, { FC } from 'react';
import { periodLabel } from 'utils/mappers';

interface Props {
  data: Agency;
  onClick?: () => void;
}

export const AgencyListItem: FC<Props> = ({ data, onClick }) => (
  <ListItem button onClick={onClick}>
    <ListItemAvatar>
      <Avatar>
        <AgencyIcon />
      </Avatar>
    </ListItemAvatar>
    <ListItemText primary={data.name} secondary={`Okres zamówień: ${periodLabel(data.ordersPeriod)}`} />
  </ListItem>
);
