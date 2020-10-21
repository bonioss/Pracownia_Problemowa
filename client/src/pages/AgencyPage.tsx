import { styled } from '@material-ui/core';
import { GenericList } from 'components/GenericList';
import { PageWrapper } from 'components/PageWrapper';
import React, { ChangeEvent } from 'react';
import { useParams } from 'react-router-dom';

// #region styles
const OrdersList = styled(GenericList)({
  margin: 16,
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
});
// #endregion

interface AgencyPageParams {
  id: string;
}

export const AgencyPage = () => {
  const { id } = useParams<AgencyPageParams>();

  const handlePageChange = (_event: ChangeEvent<unknown>, value: number) => {
    console.log(value);
  };

  return (
    <PageWrapper title={id}>
      <OrdersList
        title="Zamówienia"
        items={[]}
        pagination={{
          count: 4,
          page: 1,
          onPageChange: handlePageChange,
        }}
      />
    </PageWrapper>
  );
};
