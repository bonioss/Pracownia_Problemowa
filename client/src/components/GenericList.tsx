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

/** Właściwości listy */
export interface Props {
  /** Elementy listy */
  items: ReactNode;
  /** Nagłówek listy */
  header?: ReactNode;
  /** Informacje o paginacji */
  pagination?: {
    /** Liczba stron */
    count: number;
    /** Aktualna strona */
    page: number;
    /** Funkcja uruchamiana po zmianie strony */
    onPageChange: (event: ChangeEvent<unknown>, page: number) => void;
  };
  /** Tytuł listy */
  title?: string;
  /** Flaga czy lista się ładuje */
  loading?: boolean;
  /** Tekst wyświetlany przy pustej liście */
  emptyText?: string;
}

/**
 * Komponent szablonu listy
 * @param props Właściwości komponentu
 * @component
 */
export const GenericList: FC<Props & Stylable> = props => {
  const {
    items, header, pagination, title, loading, emptyText, ...rest
  } = props;
  return (
    <Paper {...rest}>
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
};
