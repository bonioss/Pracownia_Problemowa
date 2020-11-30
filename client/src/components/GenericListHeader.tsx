import { Divider, styled, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import { Stylable } from 'utils/types';

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  padding: 16,
});

/** Właściwości szblonu nagłówka */
export interface Props {
  title?: string;
}

/**
 * Komponent szablonu nagłówka listy
 * @param props Właściwości komponentu
 * @component
 */
export const GenericListHeader: FC<Props & Stylable> = props => {
  const { title, children, ...rest } = props;
  return (
    <div {...rest}>
      <Container>
        {title && <Typography variant="h6">{title}</Typography>}
        {children}
      </Container>

      <Divider />
    </div>
  );
};
