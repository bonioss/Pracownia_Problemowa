import {
  Button, Collapse, styled, TextField,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { Parent } from 'api/parent';
import React, { FC } from 'react';
import { FormProps, Stylable } from 'utils/types';
import * as z from 'zod';

// #region styles
const Form = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  padding: 16,
});

const SubmitButton = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('xs')]: {
    width: '100%',
  },
}));

const ActionsContainer = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: 32,
});
// #endregion

export const schema = z.object({
  kidCode: z.string()
    .min(4, { message: 'Kod dziecka jest wymagany' }),
});

export const AddParentKidForm: FC<FormProps<Parent> & Stylable> = ({
  onSubmit, error, form, ...props
}) => {
  const {
    handleSubmit, register, errors, formState,
  } = form;

  return (
    <Form {...props} onSubmit={handleSubmit(onSubmit)}>
      <Collapse in={!!error}>
        {error && <Alert severity="error">{error}</Alert>}
      </Collapse>

      <TextField
        id="addkid-kidCode"
        name="kidCode"
        label="Kod dziecka"
        type="text"
        variant="outlined"
        margin="normal"
        inputRef={register}
        helperText={errors.kidCode?.message || ''}
        error={!!errors.kidCode}
        required
      />

      <ActionsContainer>
        <SubmitButton
          variant="contained"
          color="secondary"
          type="submit"
          disabled={formState.isSubmitting}
        >
          {formState.isSubmitting ? 'Dodawanie...' : 'Dodaj'}
        </SubmitButton>
      </ActionsContainer>
    </Form>
  );
};
