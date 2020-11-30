import { Role } from 'api/auth';
import React, { FC, useMemo } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useAuth } from 'utils/authState';

/** Właściwości komponentu strzeżonej trasy */
export interface Props {
  /** Tablica z dozwolonymi rolami */
  roles: Role[];
}

/**
 * Komponent strzeżonej trasy
 * @param props Właściwości komponentu
 * @component
 */
export const GuardedRoute: FC<Props & RouteProps> = props => {
  const {
    component: Component, render, roles, ...rest
  } = props;
  const { user } = useAuth();

  const isAuthorized = useMemo(() => user && roles.includes(user.role), [user]);

  return (
    <Route
      {...rest}
      render={p => {
        if (!isAuthorized) return <Redirect to="/" />;
        if (render) return render(p);
        if (Component) return <Component {...p} />;
        return null;
      }}
    />
  );
};
