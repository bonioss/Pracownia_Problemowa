import { Button, styled } from '@material-ui/core';
import React, { useState } from 'react';
import loginBackground from 'assets/login_background.jpg';
import { LoginForm } from 'components/forms/LoginForm';
import { LoginParams, useLogin } from 'api/auth';
import { Link } from 'react-router-dom';
import { ReactComponent as PracowniaPosilkow } from 'assets/pracownia_posilkow.svg';

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

export const LoginPage = () => {
  const [login] = useLogin();
  const [formError, setError] = useState('');

  const handleLogin = async (data: LoginParams) => {
    console.log(data);

    await login(data, {
      onSuccess: user => {
        console.log(user);
      },
      onError: err => {
        setError((err as Error).message);
      },
    });
  };

  return (
    <Container>
      <AppLogo />

      <StyledLoginForm onSubmit={handleLogin} error={formError} />

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
