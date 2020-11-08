/* eslint-disable react/no-array-index-key */
import {
  Button,
  ListItem, ListItemIcon, ListItemText,
  Paper, styled, TextField,
} from '@material-ui/core';
import { PageWrapper } from 'components/PageWrapper';
import React, { useState } from 'react';
import { DatePicker } from '@material-ui/pickers';
import { format } from 'utils/dateFns';
import { useMeals } from 'api/meal';
import { mealLabelAndIcon } from 'utils/mappers';
import { GenericList } from 'components/GenericList';
import { GenericListHeader } from 'components/GenericListHeader';
import { startOfDay } from 'date-fns';
import AddIcon from '@material-ui/icons/Add';
import { useHistory } from 'react-router-dom';
import { useAuth } from 'utils/authState';

// #region styles
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

const MealsList = styled(GenericList)({
  margin: 16,
});

const MealsListHeader = styled(GenericListHeader)({
  textTransform: 'capitalize',
});
// #endregion

export const MenuPage = () => {
  const [selectedDate, selectDate] = useState(startOfDay(new Date()));
  const [page, setPage] = useState(1);
  const meals = useMeals({ date: selectedDate });
  const history = useHistory();
  const { user } = useAuth();

  return (
    <PageWrapper title="Jadłospis">
      <Actions>
        <DatePicker
          label="Wybrany dzień"
          allowKeyboardControl={false}
          renderInput={props => <TextField {...props} variant="outlined" helperText="" />}
          value={selectedDate}
          inputFormat="dd/MM/yyyy"
          onChange={date => {
            if (date) selectDate(date);
          }}
        />

        <div style={{ flex: 1 }} />

        {user?.role === 'admin' && (
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            onClick={() => history.push('/jadlospis/nowe-danie')}
          >
            Dodaj
          </Button>
        )}
      </Actions>

      <MealsList
        header={(
          <MealsListHeader title={format(selectedDate, 'PPPP')} />
        )}
        items={
          (meals.resolvedData?.results || []).map(({ description, type }, i) => {
            const { label, Icon } = mealLabelAndIcon(type);

            return user?.role === 'admin' ? (
              <ListItem
                style={{ padding: '8px 32px' }}
                button
                onClick={() => history.push('/jadlospis/fosrnfjsnrf')}
                key={i}
              >
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={description} secondary={label} />
              </ListItem>
            ) : (
              <ListItem style={{ padding: '8px 32px' }}>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={description} secondary={label} />
              </ListItem>
            );
          })
        }
        loading={meals.isFetching}
        pagination={{
          count: meals.resolvedData?.numberOfPages || 1,
          page,
          onPageChange: (_e, value) => setPage(value),
        }}
        emptyText="Brak posiłków"
      />
    </PageWrapper>
  );
};
