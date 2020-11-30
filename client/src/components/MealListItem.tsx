/* eslint-disable no-underscore-dangle */
import {
  ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, IconButton,
} from '@material-ui/core';
import React, { FC, useMemo } from 'react';
import { format } from 'utils/dateFns';
import { mealLabelAndIcon } from 'utils/mappers';
import DeleteIcon from '@material-ui/icons/Delete';
import { OrderMeal } from 'api/orders';
import { useAuth } from 'utils/authState';

interface Props {
  data: OrderMeal;
  onRemove?: (mealId: string) => void;
}

export const MealListItem: FC<Props> = ({ data, onRemove }) => {
  const { Icon, label } = useMemo(() => mealLabelAndIcon(data.type), [data.type]);
  const { user } = useAuth();

  return (
    <ListItem button>
      <ListItemAvatar>
        <Avatar>
          <Icon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={label}
        secondary={format(new Date(data.date), 'dd.MM.yyyy')}
      />

      {user?.role === 'agency' || user?.role === 'parent' ? (
        <ListItemSecondaryAction>
          <IconButton onClick={() => onRemove?.(data._id)}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      ) : null}
    </ListItem>
  );
};
