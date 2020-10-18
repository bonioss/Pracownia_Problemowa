import { useEffect } from 'react';
import { useSetAuth } from 'utils/authState';

export const LogoutPage = () => {
  const setAuth = useSetAuth();

  useEffect(() => {
    setAuth({ user: undefined });
  }, []);

  return null;
};
