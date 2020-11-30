import {
  Button, Collapse, MenuItem, styled, TextField,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { DatePicker } from '@material-ui/pickers';
import { NewAgency, ORDERS_PERIODS } from 'api/auth';
import { isAfter } from 'date-fns';
import React, { FC } from 'react';
import { Controller } from 'react-hook-form';
import { periodLabel } from 'utils/mappers';
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

/**
 * Schemat walidacji danych formularza dodawania placówki
 */
export const schema = z.object({
  email: z.string()
    .min(1, { message: 'Email jest wymagany' })
    .email({ message: 'To nie jest poprawny email' }),
  name: z.string()
    .min(1, { message: 'Nazwa placówki jest wymagana' })
    .max(100, { message: 'Nazwa placówki musi być krótsza niż 100 znaków' }),
  summerTermEnd: z.date(),
  winterTermEnd: z.date(),
  ordersPeriod: z.enum([...ORDERS_PERIODS]),
})
  .refine(data => isAfter(data.summerTermEnd, data.winterTermEnd), {
    message: 'Data semestru letniego musi być późniejsza niż data semestru zimowego',
    path: ['summerTermEnd'],
  });

/**
 * Formularz dodawania placówki
 * @param props Właściwości formularza
 * @component
 */
export const AddAgencyForm: FC<FormProps<NewAgency> & Stylable> = props => {
  const {
    onSubmit, error, form, ...rest
  } = props;
  const {
    handleSubmit, register, errors, formState, control,
  } = form;

  return (
    <Form {...rest} onSubmit={handleSubmit(onSubmit)}>
      <Collapse in={!!error}>
        {error && <Alert severity="error">{error}</Alert>}
      </Collapse>

      <TextField
        id="addagency-email"
        name="email"
        label="Adres e-mail reprezentanta"
        type="email"
        autoComplete="email"
        variant="outlined"
        margin="normal"
        inputRef={register}
        helperText={errors.email?.message || ''}
        error={!!errors.email}
        required
      />

      <TextField
        id="addagency-name"
        name="name"
        label="Nazwa placówki"
        type="text"
        autoComplete="organization"
        variant="outlined"
        margin="normal"
        inputRef={register}
        helperText={errors.name?.message || ''}
        error={!!errors.name}
        required
      />

      <Controller
        control={control}
        name="ordersPeriod"
        render={p => (
          <TextField
            id="addagency-period"
            type="text"
            label="Okres zamawiania jedzenia"
            variant="outlined"
            margin="normal"
            error={!!errors.ordersPeriod}
            helperText={errors.ordersPeriod?.message || ''}
            select
            required
            {...p}
          >
            {ORDERS_PERIODS.map(period => (
              <MenuItem key={period} value={period}>
                {periodLabel(period)}
              </MenuItem>
            ))}
          </TextField>
        )}
      />

      <Controller
        control={control}
        name="summerTermEnd"
        render={p => (
          <DatePicker
            label="Koniec semestru letniego"
            allowKeyboardControl={false}
            renderInput={prop => (
              <TextField
                {...prop}
                variant="outlined"
                helperText={errors.summerTermEnd?.message || ''}
                error={!!errors.summerTermEnd}
                margin="normal"
                required
              />
            )}
            {...p}
          />
        )}
      />

      <Controller
        control={control}
        name="winterTermEnd"
        render={p => (
          <DatePicker
            label="Koniec semestru zimowego"
            allowKeyboardControl={false}
            renderInput={prop => (
              <TextField
                {...prop}
                variant="outlined"
                helperText={errors.winterTermEnd?.message || ''}
                error={!!errors.winterTermEnd}
                margin="normal"
                required
              />
            )}
            {...p}
          />
        )}
      />

      <ActionsContainer>
        <SubmitButton
          variant="contained"
          color="primary"
          type="submit"
          disabled={formState.isSubmitting}
        >
          {formState.isSubmitting ? 'Dodawanie...' : 'Dodaj'}
        </SubmitButton>
      </ActionsContainer>
    </Form>
  );
};
