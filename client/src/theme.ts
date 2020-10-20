import { createMuiTheme, ThemeOptions } from '@material-ui/core';
import { green, red } from '@material-ui/core/colors';
import deepmerge from 'deepmerge';

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: red[500],
    },
    secondary: {
      main: green[500],
    },
  },
};

export const lightTheme = createMuiTheme(deepmerge(themeOptions, { palette: { type: 'light' } }));
export const darkTheme = createMuiTheme(deepmerge(themeOptions, { palette: { type: 'dark' } }));
