import { Role } from 'api/auth';
import React, { FC, useMemo } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useAuth } from 'utils/authState';

interface Props {
  roles: Role[];
}

export const GuardedRoute: FC<Props & RouteProps> = ({
  component: Component, render, roles, ...rest
}) => {
  const { user } = useAuth();

  const isAuthorized = useMemo(() => user && roles.includes(user.role), [user]);

  return (
    <Route
      {...rest}
      render={props => {
        if (!isAuthorized) return <Redirect to="/" />;
        if (render) return render(props);
        if (Component) return <Component {...props} />;
        return null;
      }}
    />
  );
};
