/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import {
  Button, Paper, styled,
} from '@material-ui/core';
import { useAgency, useDeleteAgency } from 'api/agencies';
import { GenericList } from 'components/GenericList';
import { PageWrapper } from 'components/PageWrapper';
import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import { ConfirmDialog } from 'components/ConfirmDialog';
import { errorHandler } from 'utils/errorHandler';
import { Alert } from '@material-ui/lab';
import { useGetAgencyOrders } from 'api/orders';
import { OrderListItem } from 'components/OrderListItem';

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

interface AgencyPageParams {
  code: string;
}

/**
 * Komponent podstrony informacji o placówce
 * @component
 */
export const AgencyPage = () => {
  const { code } = useParams<AgencyPageParams>();
  const agency = useAgency(code);
  const [ordersPage, setOrdersPage] = useState(1);
  const history = useHistory();
  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [deleteAgency] = useDeleteAgency();
  const [error, setError] = useState('');
  const orders = useGetAgencyOrders({ page: ordersPage, agencyCode: code });

  const handleDelete = async () => {
    if (agency.data) {
      await deleteAgency(agency.data.agencyCode, {
        onSuccess: () => {
          history.push('/placowki');
        },
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

  // TODO: What if code is invalid?
  return (
    <PageWrapper title={agency.data?.name}>
      <Actions>
        {error && <Alert severity="error">{error}</Alert>}

        <div style={{ flex: 1 }} />

        <Button
          variant="contained"
          color="primary"
          startIcon={<DeleteIcon />}
          onClick={() => setDeleteDialogOpen(true)}
        >Usuń
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

      <ConfirmDialog
        isOpen={isDeleteDialogOpen}
        setClose={() => setDeleteDialogOpen(false)}
        onConfirm={handleDelete}
        title="Usuwanie placówki"
      >
        Czy na pewno chcesz usunąć tą placówkę (ta akcja usunie także wszystkich podopiecznych i rodziców)?
      </ConfirmDialog>
    </PageWrapper>
  );
};
