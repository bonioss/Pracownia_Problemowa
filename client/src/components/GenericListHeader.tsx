import { Divider, styled, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import { Stylable } from 'utils/types';

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  padding: 16,
});

interface Props {
  title?: string;
}

export const GenericListHeader: FC<Props & Stylable> = ({ title, children, ...props }) => (
  <div {...props}>
    <Container>
      {title && <Typography variant="h6">{title}</Typography>}
      {children}
    </Container>

    <Divider />
  </div>
);
