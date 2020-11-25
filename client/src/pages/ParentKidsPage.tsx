import {
  Button, ListItem, ListItemText, styled, ListItemAvatar, Avatar,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import TestIcon from '@material-ui/icons/ChildCare';
import { useGetMyKid } from 'api/parent';
import { GenericList } from 'components/GenericList';
import { GenericListHeader } from 'components/GenericListHeader';
import { PageWrapper } from 'components/PageWrapper';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

// #region styles
const KidsList = styled(GenericList)({
  margin: 16,
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
});
// #endregion

export const ParentKidsPage = () => {
  const history = useHistory();
  const kids = useGetMyKid();

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
              onClick={() => history.push('/parent-dzieci/dodaj-dziecko')}
            >Dodaj
            </Button>
          </GenericListHeader>
        )}
        items={(kids.data?.data || []).map(kidGet => (
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <TestIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={`${kidGet.lastName} ${kidGet.firstName}`} />
          </ListItem>
        ))}
        loading={kids.isFetching}

      />
    </PageWrapper>
  );
};
