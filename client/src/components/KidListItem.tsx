import {
  ListItem, ListItemAvatar, Avatar, ListItemText, Button,
} from '@material-ui/core';
import TestIcon from '@material-ui/icons/ChildCare';
import DeleteIcon from '@material-ui/icons/Delete';
import { Kid } from 'api/kid';
import React, { FC, useState } from 'react';
import { ConfirmDialog } from 'components/ConfirmDialog';

interface Props {
  data: Kid;
  handleDelete: () => Promise<void>;
}

export const KidListItem: FC<Props> = ({ data, handleDelete }) => {
  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <TestIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={`${data.lastName} ${data.firstName}`} />
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
