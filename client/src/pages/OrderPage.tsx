/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import {
  Button, Paper, styled, Typography,
} from '@material-ui/core';
import { GenericList } from 'components/GenericList';
import { PageWrapper } from 'components/PageWrapper';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ConfirmDialog } from 'components/ConfirmDialog';
import { errorHandler } from 'utils/errorHandler';
import { Alert } from '@material-ui/lab';
import {
  OrderMeal, useOrder, usePayOrder, useRemoveMeal,
} from 'api/orders';
import { format } from 'utils/dateFns';
import { MealListItem } from 'components/MealListItem';
import PaidIcon from '@material-ui/icons/AttachMoney';

// #region styles
const MealsList = styled(GenericList)({
  margin: 16,
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
});

const Actions = styled(Paper)(({ theme }) => ({
  margin: 16,
  marginBottom: 0,
  padding: 16,
  display: 'flex',
  flexDirection: 'row',
  '& > *': {
    marginRight: 16,
  },
  [theme.breakpoints.down('xs')]: {
    flexDirection: 'column',
    '& > *': {
      marginRight: 0,
      marginBottom: 16,
    },
  },
}));
// #endregion

interface OrderPageParams {
  id: string;
}

export const OrderPage = () => {
  const { id } = useParams<OrderPageParams>();
  const [mealsPage, setMealsPage] = useState(1);
  const order = useOrder({ id, page: mealsPage, limit: 10 });
  const [error, setError] = useState('');
  const [payOrder] = usePayOrder();
  const [removeMeal] = useRemoveMeal();
  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [mealToRemove, setMealToRemove] = useState<OrderMeal>();

  const handlePaidClick = async () => {
    if (order.resolvedData) {
      await payOrder(order.resolvedData.results._id, {
        onError: err => {
          setError(errorHandler(err, message => {
            switch (message) {
              default:
                return 'Wystąpił nieznany błąd, spróbuj ponownie.';
            }
          }));
        },
      });
    }
  };

  const handleRemoveMeal = async () => {
    if (order.resolvedData && mealToRemove) {
      await removeMeal({
        orderId: order.resolvedData.results._id,
        kidCode: order.resolvedData.results.kidCode,
        mealId: mealToRemove._id,
      }, {
        onError: err => {
          setError(errorHandler(err, message => {
            switch (message) {
              case 'You can not delete this meal':
                return 'Nie możesz już anulować tego posiłku';
              default:
                return 'Wystąpił nieznany błąd, spróbuj ponownie.';
            }
          }));
        },
      });
    }
  };

  // TODO: What if code is invalid?
  return (
    <PageWrapper title="Zamówienie">
      <Actions>
        {error && <Alert severity="error">{error}</Alert>}

        <div style={{ flex: 1 }} />

        {order.resolvedData && (
          <Button
            variant="contained"
            color="primary"
            startIcon={<PaidIcon />}
            onClick={() => handlePaidClick()}
            disabled={order.resolvedData.results.paid}
          >{order.resolvedData.results.paid ? 'Opłacone' : 'Opłać'}
          </Button>
        )}
      </Actions>

      {order.resolvedData && (
        <Paper style={{ margin: 16, marginBottom: 0, padding: 16 }}>
          <Typography>Data początkowa: {format(new Date(order.resolvedData.results.startDate), 'dd.MM.yyyy')}</Typography>
          <Typography>Data końcowa: {format(new Date(order.resolvedData.results.endDate), 'dd.MM.yyyy')}</Typography>
          <Typography>Podopieczny: {order.resolvedData.results.kid.firstName} {order.resolvedData.results.kid.lastName}</Typography>
          <Typography>Dodatkowe informacje: {order.resolvedData.results.comments}</Typography>
        </Paper>
      )}

      {!order.isLoading && (
        <>
          <MealsList
            title="Posiłki"
            loading={order.isFetching}
            items={order.resolvedData?.results.meals.map(meal => (
              <MealListItem
                key={meal._id}
                data={meal}
                onRemove={() => {
                  setMealToRemove(meal);
                  setDeleteDialogOpen(true);
                }}
              />
            )) || []}
            pagination={{
              count: order.resolvedData?.numberOfPages || 0,
              page: mealsPage,
              onPageChange: (_e, value) => setMealsPage(value),
            }}
          />
        </>
      )}

      <ConfirmDialog
        isOpen={isDeleteDialogOpen}
        setClose={() => setDeleteDialogOpen(false)}
        onConfirm={() => handleRemoveMeal()}
        title="Anulowanie posiłku"
      >
        Czy na pewno chcesz anulować ten posiłek? Kwota {mealToRemove?.price}zł zostanie odliczona od zamówienia i dopisana do twojego konta.
      </ConfirmDialog>
    </PageWrapper>
  );
};
