import { Paper } from '@material-ui/core';
import { PageWrapper } from 'components/PageWrapper';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { errorHandler } from 'utils/errorHandler';
import { useHistory } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { NewMeal, useAddMeal } from 'api/meal';
import { MealForm, schema } from 'components/forms/MealForm';
import { startOfDay } from 'date-fns';

// #region styles
// #endregion

/**
 * Komponent podstrony dodawania posiłku
 * @component
 */
export const AddMealPage = () => {
  const form = useForm<NewMeal>({
    defaultValues: {
      date: startOfDay(new Date()),
      description: '',
      type: 'breakfast',
    },
    resolver: zodResolver(schema),
  });
  const [formError, setFormError] = useState('');
  const [addMeal] = useAddMeal();
  const history = useHistory();

  const handleAddMeal = async (data: NewMeal) => {
    await addMeal(data, {
      onSuccess: () => {
        history.push('/jadlospis');
      },
      onError: err => {
        setFormError(errorHandler(err, message => {
          switch (message) {
            default:
              return 'Wystąpił nieznany błąd, spróbuj ponownie.';
          }
        }));
      },
    });
  };

  return (
    <PageWrapper title="Dodawanie posiłku">
      <Paper style={{ margin: 16 }}>
        <MealForm form={form} onSubmit={handleAddMeal} error={formError} />
      </Paper>
    </PageWrapper>
  );
};
