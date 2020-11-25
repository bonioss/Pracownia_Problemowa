import { Button, styled } from '@material-ui/core';
import { AgencyListItem } from 'components/AgencyListItem';
import { GenericList } from 'components/GenericList';
import { GenericListHeader } from 'components/GenericListHeader';
import { PageWrapper } from 'components/PageWrapper';
import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import { useHistory } from 'react-router-dom';
import { useAgencies } from 'api/agencies';

// #region styles
const AgenciesList = styled(GenericList)({
  margin: 16,
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
});
// #endregion

export const AgenciesPage = () => {
  const history = useHistory();
  const [page, setPage] = useState(1);
  const agencies = useAgencies({ limit: 10, page });

  return (
    <PageWrapper title="Placówki">
      <AgenciesList
        header={(
          <GenericListHeader>
            <div style={{ flex: 1 }} />
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              onClick={() => history.push('/placowki/nowa')}
            >Dodaj
            </Button>
          </GenericListHeader>
        )}
        items={(agencies.resolvedData?.results || []).map(agency => (
          <AgencyListItem
            key={agency.agencyCode}
            data={agency}
            onClick={() => history.push(`/placowki/${agency.agencyCode}`)}
          />
        ))}
        pagination={{
          count: agencies.resolvedData?.numberOfPages || 0,
          page,
          onPageChange: (_e, value) => setPage(value),
        }}
        loading={agencies.isFetching}
      />
    </PageWrapper>
  );
};
