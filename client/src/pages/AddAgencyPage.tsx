import { Paper } from '@material-ui/core';
import { NewAgency, useAddAgency } from 'api/auth';
import { PageWrapper } from 'components/PageWrapper';
import React, { useState } from 'react';
import { AddAgencyForm, schema } from 'components/forms/AddAgencyForm';
import { useForm } from 'react-hook-form';
import { errorHandler } from 'utils/errorHandler';
import { useHistory } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';

// #region styles
// #endregion

export const AddAgencyPage = () => {
  const form = useForm<NewAgency>({
    defaultValues: {
      name: '',
      email: '',
      ordersPeriod: 'week',
    },
    resolver: zodResolver(schema),
  });
  const [formError, setFormError] = useState('');
  const [addAgency] = useAddAgency();
  const history = useHistory();

  const handleAddAgency = async (data: NewAgency) => {
    await addAgency(data, {
      onSuccess: res => {
        history.push(`/placowki/${res.data}`);
      },
      onError: err => {
        setFormError(errorHandler(err, message => {
          switch (message) {
            case 'E-mail already exists':
              return 'Ten adres email jest już używany przez inną placówkę';
            default:
              return 'Wystąpił nieznany błąd, spróbuj ponownie.';
          }
        }));
      },
    });
  };

  return (
    <PageWrapper title="Dodawanie placówki">
      <Paper style={{ margin: 16 }}>
        <AddAgencyForm form={form} onSubmit={handleAddAgency} error={formError} />
      </Paper>
    </PageWrapper>
  );
};
