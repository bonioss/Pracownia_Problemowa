import { Button, styled, TextField } from '@material-ui/core';
import { AgencyUser } from 'api/auth';
import { AgencyListItem } from 'components/AgencyListItem';
import { GenericList } from 'components/GenericList';
import { GenericListHeader } from 'components/GenericListHeader';
import { PageWrapper } from 'components/PageWrapper';
import React, { ChangeEvent } from 'react';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';

// #region styles
const AgenciesList = styled(GenericList)({
  margin: 16,
});
// #endregion

const fakeAgencies: AgencyUser[] = [
  {
    agencyCode: '', email: 'aaa@bbb.com', name: 'Przedszkole nr 7', role: 'agency', ordersPeriod: 'week',
  },
  {
    agencyCode: '', email: 'aaa@bbb.com', name: 'Przedszkole nr 77', role: 'agency', ordersPeriod: 'week',
  },
  {
    agencyCode: '', email: 'aaa@bbb.com', name: 'Przedszkole nr 777', role: 'agency', ordersPeriod: 'week',
  },
  {
    agencyCode: '', email: 'aaa@bbb.com', name: 'Przedszkole nr 123', role: 'agency', ordersPeriod: 'week',
  },
  {
    agencyCode: '', email: 'aaa@bbb.com', name: 'Przedszkole nr -4', role: 'agency', ordersPeriod: 'week',
  },
];

export const AgenciesPage = () => {
  const handlePageChange = (_event: ChangeEvent<unknown>, value: number) => {
    console.log(value);
  };

  return (
    <PageWrapper title="Placówki">
      <AgenciesList
        header={(
          <GenericListHeader>
            <TextField
              size="small"
              variant="outlined"
              label="Szukaj"
              placeholder="Nazwa placówki..."
              InputProps={{
                startAdornment: <SearchIcon style={{ marginRight: 8 }} />,
              }}
            />
            <div style={{ flex: 1 }} />
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
            >Dodaj
            </Button>
          </GenericListHeader>
        )}
        items={fakeAgencies.map(agency => <AgencyListItem data={agency} />)}
        pagination={{
          count: fakeAgencies.length / 4,
          page: 1,
          onPageChange: handlePageChange,
        }}
      />
    </PageWrapper>
  );
};
