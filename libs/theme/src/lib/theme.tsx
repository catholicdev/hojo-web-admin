import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

import { MuiButton } from './components';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#0851A4',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiButton
  }
});
