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

interface Props {
  name?: string;
  email?: string;
}

export const DrawerHeader: FC<Props> = ({
  name, email,
}): ReactElement => (
  <>
    <Container>
      <Grid container direction="row" alignItems="center">
        <Details>
          <Typography variant="h6" noWrap>{name}</Typography>
          <Typography color="textSecondary" noWrap gutterBottom>{email}</Typography>
        </Details>
      </Grid>
    </Container>
  </>
);
