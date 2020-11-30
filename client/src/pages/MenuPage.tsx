/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-array-index-key */
import {
  Button,
  IconButton,
  ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText,
  Paper, styled, TextField,
} from '@material-ui/core';
import { PageWrapper } from 'components/PageWrapper';
import React, { useState } from 'react';
import { DatePicker } from '@material-ui/pickers';
import { format } from 'utils/dateFns';
import { Meal, useDeleteMeal, useMeals } from 'api/meal';
import { mealLabelAndIcon } from 'utils/mappers';
import { GenericList } from 'components/GenericList';
import { GenericListHeader } from 'components/GenericListHeader';
import { startOfDay } from 'date-fns';
import AddIcon from '@material-ui/icons/Add';
import { useHistory } from 'react-router-dom';
import { useAuth } from 'utils/authState';
import DeleteIcon from '@material-ui/icons/Delete';
import { ConfirmDialog } from 'components/ConfirmDialog';

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

/**
 * Komponent podstrony jadłospisu
 * @component
 */
export const MenuPage = () => {
  const [selectedDate, selectDate] = useState(startOfDay(new Date()));
  const [page, setPage] = useState(1);
  const meals = useMeals({ date: selectedDate });
  const history = useHistory();
  const { user } = useAuth();
  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [mealToDelete, setMealToDelete] = useState<Meal>();
  const [deleteMeal] = useDeleteMeal();

  const handleDelete = async () => {
    if (mealToDelete) {
      await deleteMeal(mealToDelete._id, {
        onSuccess: () => {
          // alert('Usunięto posiłek');
        },
        // onError: err => {
        //   setError(errorHandler(err, message => {
        //     switch (message) {
        //       default:
        //         return 'Wystąpił nieznany błąd, spróbuj ponownie.';
        //     }
        //   }));
        // },
      });
    }
  };

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
          (meals.resolvedData?.results || []).map((meal, i) => {
            const { label, Icon } = mealLabelAndIcon(meal.type);

            return user?.role === 'admin' ? (
              <ListItem style={{ padding: '8px 32px' }} key={i}>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={meal.description} secondary={label} />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => {
                      setDeleteDialogOpen(true);
                      setMealToDelete(meal);
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ) : (
              <ListItem style={{ padding: '8px 32px' }} key={i}>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={meal.description} secondary={label} />
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

      <ConfirmDialog
        isOpen={isDeleteDialogOpen}
        setClose={() => setDeleteDialogOpen(false)}
        onConfirm={handleDelete}
        title="Usuwanie placówki"
      >
        Czy na pewno chcesz usunąć ten posiłek?
      </ConfirmDialog>
    </PageWrapper>
  );
};
