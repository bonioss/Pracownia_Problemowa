import {
  Button, Collapse, styled, TextField, withStyles,
} from '@material-ui/core';
import React, { FC } from 'react';
import { FormProps, Stylable } from 'utils/types';
import { LoginParams } from 'api/auth';
import * as z from 'zod';
import Alert from '@material-ui/lab/Alert';

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

export const schema = z.object({
  email: z.string()
    .min(1, { message: 'Email jest wymagany' })
    .email({ message: 'To nie jest poprawny email' }),
  password: z.string()
    .min(1, { message: 'Hasło jest wymagane' }),
});

export const LoginForm: FC<FormProps<LoginParams> & Stylable> = ({
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

      <StyledTextField
        id="login-email"
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
        id="login-password"
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

      <SubmitButton
        variant="contained"
        color="primary"
        type="submit"
        disabled={formState.isSubmitting}
      >
        {formState.isSubmitting ? 'Logowanie...' : 'Zaloguj'}
      </SubmitButton>
    </Form>
  );
};
