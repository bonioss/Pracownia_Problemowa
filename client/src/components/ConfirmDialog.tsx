import {
  Button, CircularProgress, Dialog, DialogActions, DialogContent,
  DialogContentText, DialogTitle,
  styled, useMediaQuery, useTheme,
} from '@material-ui/core';
import React, { FC, useState } from 'react';

// #region styles
const StyledProgress = styled(CircularProgress)(({ theme }) => ({
  marginRight: theme.spacing(1),
}));
// #endregion

interface Props {
  title?: string;
  isOpen: boolean;
  setClose: () => void;
  onConfirm: () => Promise<unknown> | void;
}

export const ConfirmDialog: FC<Props> = ({
  title, children, isOpen, setClose, onConfirm,
}) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [isLoading, setLoading] = useState(false);

  const handleConfirmClick = async () => {
    setLoading(true);
    try {
      await Promise.resolve(onConfirm());
      setClose();
    } catch (error) {
      // Dummy error
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog
      open={isOpen}
      onClose={() => setClose()}
      aria-labelledby="confirm-dialog"
      fullScreen={fullScreen}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{children}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setClose()} color="inherit">
          Anuluj
        </Button>
        <Button onClick={handleConfirmClick} color="primary">
          {isLoading && <StyledProgress color="primary" size={16} />}
          Potwierdź
        </Button>
      </DialogActions>
    </Dialog>
  );
};
