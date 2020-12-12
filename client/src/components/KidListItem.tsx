import {
  ListItem, ListItemAvatar, Avatar, ListItemText, Button,
} from '@material-ui/core';
import TestIcon from '@material-ui/icons/ChildCare';
import DeleteIcon from '@material-ui/icons/Delete';
import { Kid } from 'api/kid';
import React, { FC, useState } from 'react';
import { ConfirmDialog } from 'components/ConfirmDialog';
import { useAuth } from 'utils/authState';

/** Właściwości komponentu elementu listy dzieci */
export interface Props {
  /** Obiekt dziecka */
  data: Kid;
  /** Funkcja uruchamiana przy usuwaniu */
  handleDelete: () => Promise<void>;
}

/**
 * Komponent elementu listy dzieci
 * @param props Właściwości komponentu
 * @component
 */
export const KidListItem: FC<Props> = props => {
  const { data, handleDelete } = props;
  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const { user } = useAuth();

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <TestIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={`${data.lastName} ${data.firstName}`}
        secondary={user?.role === 'agency' ? `Kod: ${data.kidCode}` : undefined}
      />
      <Button
        variant="contained"
        color="primary"
        startIcon={<DeleteIcon />}
        onClick={() => setDeleteDialogOpen(true)}
      >Usuń
      </Button>
      <ConfirmDialog
        isOpen={isDeleteDialogOpen}
        setClose={() => setDeleteDialogOpen(false)}
        onConfirm={handleDelete}
        title="Usuwanie placówki"
      >
        Czy na pewno chcesz usunąć to dziecko?
      </ConfirmDialog>
    </ListItem>
  );
};
