import {
  LinearProgress,
  List, Paper, styled, Typography, withStyles,
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

const EmptyContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: 300,
});
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
  emptyText?: string;
}

export const GenericList: FC<Props & Stylable> = ({
  items, header, pagination, title, loading, emptyText, ...props
}) => (
  <Paper {...props}>
    <StyledList>
      {header || (title && <GenericListHeader title={title} />)}

      {loading && <LinearProgress />}

      {(Array.isArray(items) && items.length === 0) ? (
        <EmptyContainer>
          <Typography>{emptyText || 'Brak wyników'}</Typography>
        </EmptyContainer>
      ) : items}
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
