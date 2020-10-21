import {
  LinearProgress,
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
  flex: 1,
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
  loading?: boolean;
}

export const GenericList: FC<Props & Stylable> = ({
  items, header, pagination, title, loading, ...props
}) => (
  <Paper {...props}>
    <StyledList>
      {header || (title && <GenericListHeader title={title} />)}
      {loading && <LinearProgress />}
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
