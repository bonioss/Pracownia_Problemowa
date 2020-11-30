import { useEffect } from 'react';
import { useSetAuth } from 'utils/authState';

/**
 * Komponent podstrony wylogowania
 * @component
 */
export const LogoutPage = () => {
  const setAuth = useSetAuth();

  useEffect(() => {
    setAuth({ user: undefined });
  }, []);

  return null;
};
