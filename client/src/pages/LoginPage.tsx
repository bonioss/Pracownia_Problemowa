import { Button, styled } from '@material-ui/core';
import React, { useState } from 'react';
import loginBackground from 'assets/login_background.jpg';
import { LoginForm, schema } from 'components/forms/LoginForm';
import { LoginParams, useLogin } from 'api/auth';
import { Link } from 'react-router-dom';
import { ReactComponent as PracowniaPosilkow } from 'assets/pracownia_posilkow.svg';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { errorHandler } from 'utils/errorHandler';
import { useSetAuth } from 'utils/authState';

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

const StyledLoginForm = styled(LoginForm)({
  width: '100%',
});

const AppLogo = styled(PracowniaPosilkow)({
  marginBottom: 48,
  color: 'white',
  width: '100%',
});
// #endregion

/**
 * Komponent podstrony logowania
 * @component
 */
export const LoginPage = () => {
  const [login] = useLogin();
  const [formError, setError] = useState('');
  const setAuth = useSetAuth();

  const form = useForm<LoginParams>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleLogin = async (data: LoginParams) => {
    await login(data, {
      onSuccess: res => {
        form.reset();
        setAuth({ user: res.data });
      },
      onError: err => {
        setError(errorHandler(err, message => {
          switch (message) {
            case 'Invalid credentials.':
              return 'Nieprawidłowy email lub hasło';
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

      <StyledLoginForm onSubmit={handleLogin} error={formError} form={form} />

      <Button
        style={{ marginTop: 8 }}
        color="primary"
        component={Link}
        to="/rejestracja"
        fullWidth
      >
        Nie masz konta? Zarejestruj się!
      </Button>
    </Container>
  );
};
