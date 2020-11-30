/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-array-index-key */
import {
  Paper, styled, TextField, Typography,
} from '@material-ui/core';
import { PageWrapper } from 'components/PageWrapper';
import React, { useState } from 'react';
import { DatePicker } from '@material-ui/pickers';
import { MEAL_TYPES } from 'api/meal';
import { mealLabelAndIcon } from 'utils/mappers';
import { startOfDay } from 'date-fns';
import { DataGrid, ColDef, ValueFormatterParams } from '@material-ui/data-grid';
import { useOrdersStats } from 'api/orders';

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
// #endregion

const columns: ColDef[] = [
  {
    field: 'agency',
    headerName: 'Placówka',
    width: 200,
  },
  ...MEAL_TYPES.map(type => ({
    field: type,
    headerName: mealLabelAndIcon(type).label,
    width: 160,
    valueFormatter: (params: ValueFormatterParams) => `${params.value} szt.`,
  })),
];

/**
 * Komponent podstrony statystyk
 * @component
 */
export const AdminStatsPage = () => {
  const [selectedDate, selectDate] = useState(startOfDay(new Date()));
  const stats = useOrdersStats(selectedDate);

  return (
    <PageWrapper title="Statystyki">
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
      </Actions>

      <Paper style={{
        width: 'calc(100% - 32px)', flex: 1, margin: 16, minHeight: 400,
      }}
      >
        <DataGrid
          rows={stats.data?.map(s => ({ ...s, id: s.agency })) || []}
          columns={columns}
          pageSize={10}
          components={{
            noRowsOverlay: () => (
              <div style={{
                width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center',
              }}
              >
                <Typography>Brak informacji</Typography>
              </div>
            ),
          }}
        />
      </Paper>
    </PageWrapper>
  );
};
