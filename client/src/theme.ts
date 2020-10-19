import { createMuiTheme } from '@material-ui/core';
import { green, red } from '@material-ui/core/colors';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: red[500],
    },
    secondary: {
      main: green[500],
    },
    type: 'dark',
  },
});
