import {
  Button, Collapse, MenuItem, styled, TextField,
} from '@material-ui/core';
import React, { FC } from 'react';
import { FormProps, Stylable } from 'utils/types';
import * as z from 'zod';
import Alert from '@material-ui/lab/Alert';
import { mealLabelAndIcon } from 'utils/mappers';
import { Controller } from 'react-hook-form';
import { MEAL_TYPES, NewMeal } from 'api/meal';
import { DatePicker } from '@material-ui/pickers';

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
 * Schemat walidacji formularza dodawania posiłku
 */
export const schema = z.object({
  description: z.string()
    .min(1, { message: 'Opis dania jest wymagany' })
    .max(256, { message: 'Opis dania musi być krótszy niż 100 znaków' }),
  date: z.date(),
  type: z.enum([...MEAL_TYPES]),
});

/**
 * Formularz dodawania posiłku
 * @param props Właściwości formularza
 * @component
 */
export const MealForm: FC<FormProps<NewMeal> & Stylable> = props => {
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

      <Controller
        control={control}
        name="type"
        render={p => (
          <TextField
            id="meal-type"
            type="text"
            label="Typ dania"
            variant="outlined"
            margin="normal"
            error={!!errors.type}
            helperText={errors.type?.message || ''}
            select
            required
            {...p}
          >
            {MEAL_TYPES.map(type => (
              <MenuItem key={type} value={type}>
                {mealLabelAndIcon(type).label}
              </MenuItem>
            ))}
          </TextField>
        )}
      />

      <TextField
        id="meal-description"
        name="description"
        label="Opis dania"
        type="text"
        variant="outlined"
        margin="normal"
        inputRef={register}
        helperText={errors.description?.message || ''}
        error={!!errors.description}
        style={{ margin: '8px 0' }}
        required
      />

      <Controller
        control={control}
        name="date"
        render={p => (
          <DatePicker
            label="Wybrany dzień"
            allowKeyboardControl={false}
            renderInput={prop => (
              <TextField
                {...prop}
                variant="outlined"
                helperText={errors.date?.message || ''}
                error={!!errors.date}
                style={{ margin: '8px 0' }}
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
