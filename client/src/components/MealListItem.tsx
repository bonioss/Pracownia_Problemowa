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

/** Właściwości komponentu elementu listy posiłków */
export interface Props {
  /** Obiekt posiłku */
  data: OrderMeal;
  /** Funkcja uruchamiana przy usuwaniu */
  onRemove?: (mealId: string) => void;
}

/**
 * Komponent elementu listy posiłków
 * @param props Właściwości komponentu
 * @component
 */
export const MealListItem: FC<Props> = props => {
  const { data, onRemove } = props;
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
