import { zodResolver } from '@hookform/resolvers/zod';
import { styled } from '@material-ui/core';
import { RegisterParams, useRegister } from 'api/auth';
import loginBackground from 'assets/login_background.jpg';
import { ReactComponent as PracowniaPosilkow } from 'assets/pracownia_posilkow.svg';
import { RegistryForm, schema } from 'components/forms/RegistryForm';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { errorHandler } from 'utils/errorHandler';

// #region styles
const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  paddingLeft: 16,
  paddingRight: 16,
  background: `url(${loginBackground})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  '& > *': {
    maxWidth: 500,
  },
});

const StyledLoginForm = styled(RegistryForm)({
  width: '100%',
});

const AppLogo = styled(PracowniaPosilkow)({
  marginBottom: 48,
  color: 'white',
  width: '100%',
});
// #endregion

export const RegisterPage = () => {
  const [register] = useRegister();
  const [formError, setError] = useState('');
  const history = useHistory();
  const form = useForm<RegisterParams>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      passwordConfirm: '',
      agencyCode: '',
    },
  });

  const handleRegister = async (data: RegisterParams) => {
    await register(data, {
      onSuccess: () => {
        form.reset();
        history.push('/logowanie');
      },
      onError: err => {
        setError(errorHandler(err, message => {
          switch (message) {
            case 'E-mail already exists':
              return 'Konto z takim adresem e-mail już istnieje';
            case 'Invalid agency code':
              return 'Nieprawidłowy kod placówki';
            default:
              return 'Wystąpił nieznany błąd, spróbuj ponownie.';
          }
        }));
      },
    });
  };

  return (
    <Container>
      <AppLogo />

      <StyledLoginForm onSubmit={handleRegister} error={formError} form={form} />

    </Container>
  );
};
