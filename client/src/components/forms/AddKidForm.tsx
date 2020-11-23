import {
  Button, Collapse, styled, TextField,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { NewKid } from 'api/auth';
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
  firstName: z.string()
    .min(3, { message: 'Imię jest wymagane' }),
  lastName: z.string()
    .min(3, { message: 'Nazwisko jest wymagane' }),
  agencyCode: z.string()
    .min(4, { message: 'Kod jest wymagany' }),
});

export const AddKidForm: FC<FormProps<NewKid> & Stylable> = ({
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
        id="addkid-firstname"
        name="firstName"
        label="Imie dziecka"
        type="text"
        variant="outlined"
        margin="normal"
        inputRef={register}
        helperText={errors.firstName?.message || ''}
        error={!!errors.firstName}
        required
      />

      <TextField
        id="addkid-lastname"
        name="lastName"
        label="Nazwisko dziecka"
        type="text"
        variant="outlined"
        margin="normal"
        inputRef={register}
        helperText={errors.lastName?.message || ''}
        error={!!errors.lastName}
        required
      />

      <TextField
        id="addkid-agencycode"
        name="agencyCode"
        label="Kod placówki"
        type="text"
        variant="outlined"
        margin="normal"
        inputRef={register}
        helperText={errors.agencyCode?.message || ''}
        error={!!errors.agencyCode}
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
