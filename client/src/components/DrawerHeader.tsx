import React, { FC, ReactElement } from 'react';
import { Typography, styled, Grid } from '@material-ui/core';

// #region styles
const Container = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
  transition: '0.3s',
}));

const Details = styled('div')({
  flex: 1,
});
// #endregion

/** Właściwości nagłówka panelu bocznego */
export interface Props {
  /** Pierwsza linia tekstu */
  name?: string;
  /** Adres email */
  email?: string;
  /** Druga linia tekstu */
  text?: string;
}

/**
 * Komponent nagłówka panelu bocznego
 * @param props Właściwości nagłówka
 * @component
 */
export const DrawerHeader: FC<Props> = (props): ReactElement => {
  const {
    name, email, text,
  } = props;
  return (
    <>
      <Container>
        <Grid container direction="row" alignItems="center">
          <Details>
            <Typography variant="h6" noWrap>{name}</Typography>
            <Typography color="textSecondary" noWrap gutterBottom>{email}</Typography>
            {text && <Typography color="textSecondary" noWrap gutterBottom>{text}</Typography>}
          </Details>
        </Grid>
      </Container>
    </>
  );
};
