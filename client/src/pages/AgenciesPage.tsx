import { Button, styled } from '@material-ui/core';
import { OrdersPeriod } from 'api/auth';
import { AgencyListItem } from 'components/AgencyListItem';
import { GenericList } from 'components/GenericList';
import { GenericListHeader } from 'components/GenericListHeader';
import { PageWrapper } from 'components/PageWrapper';
import React, { ChangeEvent } from 'react';
import AddIcon from '@material-ui/icons/Add';
import { useHistory } from 'react-router-dom';

// #region styles
const AgenciesList = styled(GenericList)({
  margin: 16,
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
});
// #endregion

export interface TempAgency {
  agencyCode: string;
  email: string;
  name: string;
  ordersPeriod: OrdersPeriod;
  id: string;
}

const fakeAgencies: TempAgency[] = [
  {
    agencyCode: '', email: 'aaa@bbb.com', name: 'Przedszkole nr 7', ordersPeriod: 'week', id: '1',
  },
  {
    agencyCode: '', email: 'aaa@bbb.com', name: 'Przedszkole nr 77', ordersPeriod: 'week', id: '2',
  },
  {
    agencyCode: '', email: 'aaa@bbb.com', name: 'Przedszkole nr 777', ordersPeriod: 'week', id: '3',
  },
  {
    agencyCode: '', email: 'aaa@bbb.com', name: 'Przedszkole nr 123', ordersPeriod: 'week', id: '4',
  },
  {
    agencyCode: '', email: 'aaa@bbb.com', name: 'Przedszkole nr -4', ordersPeriod: 'week', id: '5',
  },
];

export const AgenciesPage = () => {
  const history = useHistory();

  const handlePageChange = (_event: ChangeEvent<unknown>, value: number) => {
    console.log(value);
  };

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
        items={fakeAgencies.map(agency => (
          <AgencyListItem
            data={agency}
            onClick={() => history.push(`/placowki/${agency.id}`)}
          />
        ))}
        pagination={{
          count: fakeAgencies.length / 4,
          page: 1,
          onPageChange: handlePageChange,
        }}
      />
    </PageWrapper>
  );
};
