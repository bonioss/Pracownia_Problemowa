import {
  List, Paper, styled, withStyles,
} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import React, { ChangeEvent, FC, ReactNode } from 'react';
import { Stylable } from 'utils/types';
import { GenericListHeader } from './GenericListHeader';

// #region styles
const StyledList = styled(List)({
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
});

const StyledPagination = withStyles({
  ul: {
    justifyContent: 'center',
  },
  root: {
    padding: 16,
  },
})(Pagination);
// #endregion

interface Props {
  items: ReactNode;
  header?: ReactNode;
  pagination?: {
    count: number;
    page: number;
    onPageChange: (event: ChangeEvent<unknown>, page: number) => void;
  };
  title?: string;
}

export const GenericList: FC<Props & Stylable> = ({
  items, header, pagination, title, ...props
}) => (
  <Paper {...props}>
    <StyledList>
      {header || (title && <GenericListHeader title={title} />)}
      {items}
    </StyledList>

    {pagination && (
      <StyledPagination
        page={pagination.page}
        count={pagination.count}
        onChange={pagination.onPageChange}
        shape="rounded"
      />
    )}
  </Paper>
);
