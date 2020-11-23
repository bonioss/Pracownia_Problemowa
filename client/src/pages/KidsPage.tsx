import { Button, styled } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { useKids, useDeleteKid, Kid } from 'api/kid';
import { GenericList } from 'components/GenericList';
import { GenericListHeader } from 'components/GenericListHeader';
import { KidListItem } from 'components/KidListItem';
import { PageWrapper } from 'components/PageWrapper';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { errorHandler } from 'utils/errorHandler';

// #region styles
const KidsList = styled(GenericList)({
  margin: 16,
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
});
// #endregion

interface KidPageParams {
  code: string;
}

export const KidsPage = () => {
  const history = useHistory();
  const [page, setPage] = useState(1);
  const kids = useKids({ limit: 10, page });
  const [deleteKid] = useDeleteKid();
  const [error, setError] = useState('');

  return (
    <PageWrapper title="Dzieci">
      <KidsList
        header={(
          <GenericListHeader>
            <div style={{ flex: 1 }} />
            <Button
              variant="contained"
              color="secondary"
              startIcon={<AddIcon />}
              onClick={() => history.push('/dzieci/nowe-dziecko')}
            >Dodaj
            </Button>
          </GenericListHeader>
        )}
        items={(kids.resolvedData?.results || []).map(kidGet => {
          const handleDeleteKid = async () => {
            if (kidGet) {
              await deleteKid(kidGet.kidCode, {
                onSuccess: () => {
                  history.push('/dzieci');
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
          return (
            <KidListItem
              data={kidGet}
              handleDelete={handleDeleteKid}
            />
          );
        })}
        pagination={{
          count: kids.resolvedData?.numberOfPages || 0,
          page,
          onPageChange: (_e, value) => setPage(value),
        }}
        loading={kids.isFetching}
      />
    </PageWrapper>
  );
};
