import { Paper } from '@material-ui/core';
import { NewKid, useAddKid } from 'api/auth';
import { PageWrapper } from 'components/PageWrapper';
import React, { useState } from 'react';
import { AddKidForm, schema } from 'components/forms/AddKidForm';
import { useForm } from 'react-hook-form';
import { errorHandler } from 'utils/errorHandler';
import { useHistory } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';

// #region styles
// #endregion

export const AddKidPage = () => {
  const form = useForm<NewKid>({
    defaultValues: {
      firstName: '',
      lastName: '',
      agencyCode: '',
    },
    resolver: zodResolver(schema),
  });
  const [formError, setFormError] = useState('');
  const [addKid] = useAddKid();
  const history = useHistory();

  const handleAddKid = async (data: NewKid) => {
    await addKid(data, {
      onSuccess: () => {
        history.push('/dzieci');
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
        <AddKidForm form={form} onSubmit={handleAddKid} error={formError} />
      </Paper>
    </PageWrapper>
  );
};
