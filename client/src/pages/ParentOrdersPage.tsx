/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import {
  Button, MenuItem, Paper, styled, TextField,
} from '@material-ui/core';
import { GenericList } from 'components/GenericList';
import { PageWrapper } from 'components/PageWrapper';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Alert } from '@material-ui/lab';
import { useAllKids, useKidOrders } from 'api/orders';
import { OrderListItem } from 'components/OrderListItem';
import AddIcon from '@material-ui/icons/Add';
import { Kid } from 'api/kid';

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

export const ParentOrdersPage = () => {
  const [ordersPage, setOrdersPage] = useState(1);
  const [error] = useState('');
  const history = useHistory();
  const [selectedChild, selectChild] = useState<Kid>();
  const orders = useKidOrders({ page: ordersPage, kidCode: selectedChild?.kidCode });
  const children = useAllKids();

  const handleChangeChild = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (children.data) {
      const childId = event.target.value;
      selectChild(children.data.find(child => child._id === childId));
    }
  };

  // TODO: What if code is invalid?
  return (
    <PageWrapper title="Zamówienie">
      <Actions>
        {error && <Alert severity="error">{error}</Alert>}

        <TextField
          id="select-child"
          select
          label="Wybierz dziecko"
          value={selectedChild?._id || ''}
          onChange={handleChangeChild}
          variant="outlined"
          style={{ minWidth: 200 }}
        >
          {(children.data || []).map(({ firstName, lastName, _id }) => (
            <MenuItem key={_id} value={_id}>
              {firstName} {lastName}
            </MenuItem>
          ))}
        </TextField>

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
            key={order._id}
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
