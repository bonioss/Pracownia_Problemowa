import React, {
  FC, ReactElement,
} from 'react';
import {
  ListItem, ListItemIcon, ListItemText, SvgIconProps,
} from '@material-ui/core';
import { Link as RouterLink, LinkProps as RouterLinkProps, useRouteMatch } from 'react-router-dom';

/** Właściwości elementu nawigacji */
export interface Props {
  /** Nazwa elementu */
  name: string;
  /** Ikona elementu */
  icon: (props: SvgIconProps) => JSX.Element;
  /** Adres docelowy */
  to: string;
  /** Funkcja uruchamiana po kliknięciu */
  onClick?: () => void;
  /** Flaga czy adres ma być porównywany dokładnie */
  exact?: boolean;
  /** Flaga czy element ma być wyłączony */
  disabled?: boolean;
}

/**
 * Komponent elementu nawigacyjnego
 * @param props Właściwości komponentu
 * @component
 */
export const DrawerItem: FC<Props> = (props): ReactElement => {
  const {
    name, icon: Icon, to, onClick, exact = true, disabled,
  } = props;
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
