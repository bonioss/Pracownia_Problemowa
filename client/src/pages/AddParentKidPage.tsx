import { Paper } from '@material-ui/core';
import { Parent, useAddKid } from 'api/parent';
import { PageWrapper } from 'components/PageWrapper';
import React, { useState } from 'react';
import { AddParentKidForm, schema } from 'components/forms/AddParentKidForm';
import { useForm } from 'react-hook-form';
import { errorHandler } from 'utils/errorHandler';
import { useHistory } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';

// #region styles
// #endregion

export const AddParentKidPage = () => {
  const form = useForm<Parent>({
    defaultValues: {
      kidCode: '',
    },
    resolver: zodResolver(schema),
  });
  const [formError, setFormError] = useState('');
  const [addKid] = useAddKid();
  const history = useHistory();

  const handleAddKid = async (data: Parent) => {
    await addKid(data, {
      onSuccess: () => {
        history.push('/parent-dzieci');
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
    <PageWrapper title="Dodawanie dziecka">
      <Paper style={{ margin: 16 }}>
        <AddParentKidForm form={form} onSubmit={handleAddKid} error={formError} />
      </Paper>
    </PageWrapper>
  );
};
