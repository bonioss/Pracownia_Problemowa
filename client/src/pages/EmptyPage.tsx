import { styled, Typography } from '@material-ui/core';
import { PageWrapper } from 'components/PageWrapper';
import React from 'react';

const Container = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
});

export const EmptyPage = () => (
  <PageWrapper title="Strona nie istnieje">
    <Container>
      <Typography variant="h3">Szukana strona nie istnieje!</Typography>
    </Container>
  </PageWrapper>
);
