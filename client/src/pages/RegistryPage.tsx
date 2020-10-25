import { Button, styled } from '@material-ui/core';
import React, { useState } from 'react';
import loginBackground from 'assets/login_background.jpg';
import { RegistryForm, schema } from 'components/forms/RegistryForm';
import { RegisterParams, useRegister } from 'api/auth';
import { ReactComponent as PracowniaPosilkow } from 'assets/pracownia_posilkow.svg';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
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
      onSuccess: res => {
        form.reset();
        // zrobic tak jak w addAgency?
      },
      onError: err => {
        setError(errorHandler(err, message => {
          switch (message) {
            case 'Hasło jest wymagane':
              return 'Hasło jest wymagane';
            case 'Hasła się nie zgadzają':
              return 'Hasła się nie zgadzają';
            case 'Imię jest wymagane':
              return 'Imie jest wymagane';
            case 'Nazwisko jest wymagane':
              return 'Nazwisko jest wymagane';
            case 'Kod jest wymagany':
              return 'Kod jest wymagany';
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
