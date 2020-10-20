import React, {
  FC, ReactElement,
} from 'react';
import {
  ListItem, ListItemIcon, ListItemText, SvgIconProps,
} from '@material-ui/core';
import { Link as RouterLink, LinkProps as RouterLinkProps, useRouteMatch } from 'react-router-dom';

interface Props {
  name: string;
  icon: (props: SvgIconProps) => JSX.Element;
  to: string;
  onClick?: () => void;
  exact?: boolean;
  disabled?: boolean;
}

export const DrawerItem: FC<Props> = ({
  name, icon: Icon, to, onClick, exact = true, disabled,
}): ReactElement => {
  const match = useRouteMatch({ path: to, exact });

  const renderLink = React.useMemo(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    () => React.forwardRef<any, Omit<RouterLinkProps, 'to'>>((itemProps, ref) => (
      <RouterLink innerRef={ref} to={to} {...itemProps} />
    )),
    [to],
  );

  return (
    <ListItem
      component={renderLink}
      button
      selected={!!match}
      onClick={onClick}
      disabled={disabled}
    >
      {Icon && (
        <ListItemIcon>
          <Icon color={match ? 'primary' : 'inherit'} />
        </ListItemIcon>
      )}

      <ListItemText
        primary={name}
        primaryTypographyProps={{
          color: match ? 'primary' : 'textPrimary',
        }}
      />
    </ListItem>
  );
};
