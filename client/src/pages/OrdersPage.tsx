/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import { Button, Paper, styled } from '@material-ui/core';
import { GenericList } from 'components/GenericList';
import { PageWrapper } from 'components/PageWrapper';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Alert } from '@material-ui/lab';
import { useGetAgencyOrders } from 'api/orders';
import { useAuth } from 'utils/authState';
import { OrderListItem } from 'components/OrderListItem';
import AddIcon from '@material-ui/icons/Add';

// #region styles
const OrdersList = styled(GenericList)({
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

export const OrdersPage = () => {
  const { user } = useAuth();
  const [ordersPage, setOrdersPage] = useState(1);
  const [error] = useState('');
  const orders = useGetAgencyOrders({ page: ordersPage, agencyCode: user?.agencyCode });
  const history = useHistory();

  // TODO: What if code is invalid?
  return (
    <PageWrapper title="Zamówienie">
      <Actions>
        {error && <Alert severity="error">{error}</Alert>}

        <div style={{ flex: 1 }} />

        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => history.push('/zamowienia/nowe')}
        >Dodaj
        </Button>
      </Actions>

      <OrdersList
        title="Zamówienia"
        loading={orders.isFetching}
        items={orders.resolvedData?.results.map(order => (
          <OrderListItem
            data={order}
            onClick={() => history.push(`/zamowienia/${order._id}`)}
          />
        )) || []}
        pagination={{
          count: orders.resolvedData?.numberOfPages || 0,
          page: ordersPage,
          onPageChange: (_e, value) => setOrdersPage(value),
        }}
      />
    </PageWrapper>
  );
};
