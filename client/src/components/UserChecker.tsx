import { useMe } from 'api/auth';
import { useEffect } from 'react';
import { useSetAuth } from 'utils/authState';

export const UserChecker = () => {
  const me = useMe();
  const setAuth = useSetAuth();

  useEffect(() => {
    if (me.data) setAuth({ user: me.data?.data });
  }, [me]);

  return null;
};
