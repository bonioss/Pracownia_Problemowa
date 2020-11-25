/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-underscore-dangle */
import {
  Button,
  Checkbox,
  Chip,
  CircularProgress,
  Divider,
  FormControlLabel,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  MenuItem, Paper, Step, StepContent, StepLabel, Stepper, styled, TextField, Typography,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { DatePicker } from '@material-ui/pickers';
import { MealType, MEAL_TYPES } from 'api/meal';
import {
  Meals, OrderDay, useEarliestOrderDate, useGetOrderPrice, usePlaceOrder,
} from 'api/orders';
import { PageWrapper } from 'components/PageWrapper';
import { isBefore } from 'date-fns';
import React, { useEffect, useMemo, useState } from 'react';
import { errorHandler } from 'utils/errorHandler';
import { mealLabelAndIcon } from 'utils/mappers';

// #region styles
const Container = styled(Paper)({
  margin: 16,
  padding: 16,
});

const Actions = styled('div')({
  display: 'grid',
  gap: '16px',
  gridTemplateColumns: 'auto auto',
  marginTop: 32,
  width: 'fit-content',
});

const MealsContainer = styled('div')({
  display: 'grid',
  columnGap: '32px',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
});

const DayContainer = styled('div')({
  marginBottom: 8, marginTop: 16,
});
// #endregion

export interface TMPChild {
  _id: string;
  firstName: string;
  lastName: string;
  kidCode: string;
}

const children: TMPChild[] = [
  {
    _id: '1', firstName: 'Andrzej', lastName: 'Duda', kidCode: 'sBL14d6t0',
  },
  {
    _id: '2', firstName: 'Jan', lastName: 'Owsik', kidCode: 'sBL14d6t0',
  },
  {
    _id: '3', firstName: 'Waldek', lastName: 'Kolano', kidCode: 'bstrnty',
  },
  {
    _id: '4', firstName: 'Yyyyy', lastName: 'Aaaaaa', kidCode: 'vfsgdr',
  },
];

const steps = [
  'Wybór dziecka',
  'Wybór daty',
  'Wybór posiłków',
  'Podsumowanie',
  'Zamówienie złożone',
];

enum OrderStep {
  SELECT_CHILD,
  SELECT_DATE,
  SELECT_MEALS,
  SUMMARY,
  ORDER_PLACED
}

const daysNames = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'];

export const PlaceOrderPage = () => {
  const [selectedChild, selectChild] = useState<TMPChild>();
  const [step, setStep] = useState(0);
  const [holidays, setHolidays] = useState(false);
  const [comments, setComments] = useState('');
  const [selectedDate, selectDate] = useState<Date>();
  const earliestDate = useEarliestOrderDate(selectedChild?.kidCode);
  const [getOrderPrice] = useGetOrderPrice();
  const [totalPrice, setTotalPrice] = useState<number>();
  const [placeOrder] = usePlaceOrder();
  const [error, setError] = useState('');
  // const { user } = useAuth();

  const [meals, setMeals] = React.useState<Meals>({
    0: {
      breakfast: false,
      dinner: false,
      lunch: false,
      soup: false,
      'main dish': false,
      'tea time': false,
    },
    1: {
      breakfast: false,
      dinner: false,
      lunch: false,
      soup: false,
      'main dish': false,
      'tea time': false,
    },
    2: {
      breakfast: false,
      dinner: false,
      lunch: false,
      soup: false,
      'main dish': false,
      'tea time': false,
    },
    3: {
      breakfast: false,
      dinner: false,
      lunch: false,
      soup: false,
      'main dish': false,
      'tea time': false,
    },
    4: {
      breakfast: false,
      dinner: false,
      lunch: false,
      soup: false,
      'main dish': false,
      'tea time': false,
    },
    5: {
      breakfast: false,
      dinner: false,
      lunch: false,
      soup: false,
      'main dish': false,
      'tea time': false,
    },
    6: {
      breakfast: false,
      dinner: false,
      lunch: false,
      soup: false,
      'main dish': false,
      'tea time': false,
    },
  });

  const orderData = useMemo(() => (
    (Object.keys(meals) as unknown as OrderDay[]).map(day => {
      const types = Object.entries(meals[day]) as [MealType, boolean][];
      return ({
        day,
        types: types.filter(([_, selected]) => selected).map(([type, _]) => type),
      });
    })
  ), [meals]);

  const handleChange = (day: OrderDay, type: MealType, value: boolean) => {
    setMeals({ ...meals, [day]: { ...meals[day], [type]: value } });
  };

  const handleChangeChild = (event: React.ChangeEvent<HTMLInputElement>) => {
    const childId = event.target.value;
    selectChild(children.find(child => child._id === childId));
  };

  const handleNext = async () => {
    if (selectedChild && selectedDate && step === OrderStep.SUMMARY) {
      await placeOrder({
        startDate: selectedDate,
        kidCode: selectedChild.kidCode,
        orders: orderData,
        comments,
        holidays,
      }, {
        onError: err => {
          setError(errorHandler(err, message => {
            switch (message) {
              default:
                return 'Wystąpił nieznany błąd, spróbuj ponownie.';
            }
          }));
        },
        onSuccess: () => {
          setStep(prevStep => prevStep + 1);
        },
      });
    } else setStep(prevStep => prevStep + 1);
  };

  useEffect(() => {
    if (selectedChild && selectedDate && (step === OrderStep.SUMMARY)) {
      getOrderPrice({
        startDate: selectedDate,
        kidCode: selectedChild.kidCode,
        orders: orderData,
        comments,
        holidays,
      })
        .then(res => setTotalPrice(res?.data))
        .catch(() => setTotalPrice(undefined));
    }
    setTotalPrice(undefined);
  }, [step]);

  const canGoNext = () => {
    if (step === OrderStep.SELECT_CHILD) {
      return selectedChild !== undefined;
    }

    if (step === OrderStep.SELECT_DATE) {
      return earliestDate.data
        && selectedDate
        && !isBefore(selectedDate, new Date(earliestDate.data));
    }

    if (step === OrderStep.SELECT_MEALS) {
      return orderData.reduce((a, b) => a + b.types.length, 0) > 0;
    }

    if (step === OrderStep.SUMMARY) {
      return totalPrice !== undefined;
    }

    return false;
  };

  return (
    <PageWrapper title="Nowe zamówienie">
      <Container>
        {error && <Alert severity="error">{error}</Alert>}

        <Stepper activeStep={step} orientation="vertical">
          {steps.map((stepLabel, i) => (
            <Step key={stepLabel}>
              <StepLabel>{stepLabel}</StepLabel>
              <StepContent>
                {/* Krok pierwszy, wybór dziecka */}
                {i === OrderStep.SELECT_CHILD && (
                  <TextField
                    id="select-child"
                    select
                    label="Wybierz dziecko"
                    value={selectedChild?._id || ''}
                    onChange={handleChangeChild}
                    variant="outlined"
                    style={{ minWidth: 200 }}
                  >
                    {children.map(({ firstName, lastName, _id }) => (
                      <MenuItem key={_id} value={_id}>
                        {firstName} {lastName}
                      </MenuItem>
                    ))}
                  </TextField>
                )}

                {/* Krok drugi, wybór daty zamówienia */}
                {i === OrderStep.SELECT_DATE && (
                  <DatePicker
                    label="Wybrany dzień"
                    allowKeyboardControl={false}
                    renderInput={props => <TextField {...props} variant="outlined" helperText="" />}
                    value={selectedDate}
                    inputFormat="dd/MM/yyyy"
                    minDate={earliestDate.data ? new Date(earliestDate.data) : undefined}
                    disabled={!earliestDate.data}
                    onChange={date => {
                      if (date) selectDate(date);
                    }}
                  />
                )}

                {/* Krok trzeci, wybór posiłków */}
                {i === OrderStep.SELECT_MEALS && (
                <>
                  <MealsContainer>
                    {([0, 1, 2, 3, 4, 5, 6] as OrderDay[]).map(day => (
                      <DayContainer key={day}>
                        <List subheader={(
                          <ListSubheader disableSticky>{daysNames[day]}</ListSubheader>
                          )}
                        >
                          {MEAL_TYPES.map(type => {
                            const { Icon, label } = mealLabelAndIcon(type);
                            return (
                              <ListItem key={type} role={undefined} dense>
                                <ListItemIcon>
                                  <Checkbox
                                    edge="start"
                                    checked={meals[day][type]}
                                    color="primary"
                                    onChange={e => handleChange(day, type, e.target.checked)}
                                    icon={<Icon />}
                                    checkedIcon={<Icon />}
                                  />
                                </ListItemIcon>
                                <ListItemText primary={label} />
                              </ListItem>
                            );
                          })}
                        </List>

                      </DayContainer>
                    ))}
                  </MealsContainer>

                  <FormControlLabel
                    label="Chcę posiłki w święta"
                    control={(
                      <Checkbox
                        checked={holidays}
                        onChange={e => setHolidays(e.target.checked)}
                        name="holidays"
                        color="primary"
                      />
                    )}
                  />
                </>
                )}

                {i === OrderStep.SUMMARY && (
                  <div>
                    {orderData.filter(({ types }) => types.length).map(({ day, types }) => (
                      <div key={day}>
                        <Typography>{daysNames[day]}:</Typography>
                        <div style={{ margin: '8px 0 24px' }}>
                          {types.map(type => {
                            const { Icon, label } = mealLabelAndIcon(type);
                            return (
                              <Chip
                                icon={<Icon />}
                                label={label}
                                style={{ marginRight: 8, marginBottom: 8 }}
                                key={type}
                              />
                            );
                          })}
                        </div>
                      </div>
                    ))}

                    <TextField
                      label="Dodatkowe uwagi"
                      multiline
                      value={comments}
                      onChange={event => setComments(event.target.value)}
                      style={{ marginBottom: 16 }}
                      variant="outlined"
                      fullWidth
                    />

                    <Divider />

                    <div style={{ marginTop: 16, display: 'flex', alignItems: 'center' }}>
                      <Typography style={{ marginRight: 8 }}>Razem: </Typography>
                      {totalPrice !== undefined ? (
                        <Typography><b>{totalPrice}zł</b></Typography>
                      ) : (
                        <CircularProgress size={20} />
                      )}
                    </div>
                  </div>
                )}

                {i === OrderStep.ORDER_PLACED && (
                  <Typography>Dziękujemy za złożenie zamówienia!</Typography>
                )}

                {step !== OrderStep.ORDER_PLACED && (
                  <Actions>
                    <Button
                      disabled={step === 0}
                      onClick={() => setStep(prevStep => prevStep - 1)}
                    >
                      Cofnij
                    </Button>

                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      disabled={!canGoNext()}
                    >
                      {step === steps.length - 1 ? 'Zamów' : 'Dalej'}
                    </Button>
                  </Actions>
                )}
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Container>
    </PageWrapper>
  );
};
