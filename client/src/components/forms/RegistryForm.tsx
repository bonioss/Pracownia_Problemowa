import {
  Button, Collapse, styled, TextField, withStyles,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { RegisterParams } from 'api/auth';
import React, { FC } from 'react';
import { FormProps, Stylable } from 'utils/types';
import * as z from 'zod';

// #region styles
const Form = styled('form')({
  display: 'flex',
  flexDirection: 'column',
});

const SubmitButton = styled(Button)({
  marginTop: 32,
});

const StyledTextField = withStyles({
  root: {
    '& .MuiOutlinedInput-root:not(.Mui-focused)': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'white',
        borderWidth: 2,
      },
    },
  },
})(TextField);
// #endregion

/**
 * Schemat walidacji formularza rejestracji
 */
export const schema = z.object({
  email: z.string()
    .min(1, { message: 'Email jest wymagany' })
    .email({ message: 'To nie jest poprawny email' }),
  firstName: z.string()
    .min(3, { message: 'Imię jest wymagane' }),
  lastName: z.string()
    .min(3, { message: 'Nazwisko jest wymagane' }),
  password: z.string()
    .min(1, { message: 'Hasło jest wymagane' })
    .min(8, { message: 'Hasło musi mieć co najmniej 8 znaków' }),
  passwordConfirm: z.string()
    .min(4, { message: 'Hasło jest wymagane' }),
  agencyCode: z.string()
    .min(4, { message: 'Kod jest wymagany' }),
})
  .refine(data => data.password === data.passwordConfirm, {
    message: 'Hasła się nie zgadzają',
    path: ['passwordConfirm'],
  });

/**
 * Formularz rejestracji
 * @param props Właściwości formularza
 * @component
 */
export const RegistryForm: FC<FormProps<RegisterParams> & Stylable> = props => {
  const {
    onSubmit, error, form, ...rest
  } = props;
  const {
    handleSubmit, register, errors, formState,
  } = form;

  return (
    <Form {...rest} onSubmit={handleSubmit(onSubmit)}>
      <Collapse in={!!error}>
        {error && <Alert severity="error">{error}</Alert>}
      </Collapse>

      <StyledTextField
        id="registry-email"
        name="email"
        label="Adres e-mail"
        type="email"
        autoComplete="email"
        variant="outlined"
        margin="normal"
        inputRef={register}
        helperText={errors.email?.message || ''}
        error={!!errors.email}
      />

      <StyledTextField
        id="registry-firstName"
        name="firstName"
        label="Imię"
        type="string"
        variant="outlined"
        margin="normal"
        inputRef={register}
        helperText={errors.firstName?.message || ''}
        error={!!errors.firstName}
      />

      <StyledTextField
        id="registry-lastName"
        name="lastName"
        label="Nazwisko"
        type="string"
        variant="outlined"
        margin="normal"
        inputRef={register}
        helperText={errors.lastName?.message || ''}
        error={!!errors.lastName}
      />

      <StyledTextField
        id="registry-password"
        name="password"
        label="Hasło"
        type="password"
        autoComplete="current-password"
        variant="outlined"
        margin="normal"
        inputRef={register}
        helperText={errors.password?.message || ''}
        error={!!errors.password}
      />

      <StyledTextField
        id="registry-confirm-password"
        name="passwordConfirm"
        label="Powtórz hasło"
        type="password"
        variant="outlined"
        margin="normal"
        inputRef={register}
        helperText={errors.passwordConfirm?.message || ''}
        error={!!errors.passwordConfirm}
      />

      <StyledTextField
        id="registry-agencyCode"
        name="agencyCode"
        label="Kod placówki"
        type="string"
        variant="outlined"
        margin="normal"
        inputRef={register}
        helperText={errors.agencyCode?.message || ''}
        error={!!errors.agencyCode}
      />

      <SubmitButton
        variant="contained"
        color="primary"
        type="submit"
        disabled={formState.isSubmitting}
      >
        {formState.isSubmitting ? 'Rejestrowanie...' : 'Zarejstruj'}
      </SubmitButton>
    </Form>

  );
};
