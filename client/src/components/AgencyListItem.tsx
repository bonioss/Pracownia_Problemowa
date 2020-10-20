import {
  ListItem, ListItemAvatar, Avatar, ListItemText,
} from '@material-ui/core';
import AgencyIcon from '@material-ui/icons/Business';
import { AgencyUser } from 'api/auth';
import React, { FC } from 'react';

interface Props {
  data: AgencyUser;
}

export const AgencyListItem: FC<Props> = ({ data }) => (
  <ListItem button>
    <ListItemAvatar>
      <Avatar>
        <AgencyIcon />
      </Avatar>
    </ListItemAvatar>
    <ListItemText primary={data.name} secondary={data.email} />
  </ListItem>
);
