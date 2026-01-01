import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
  },
  typography: {
    fontFamily: 'var(--font-primary), sans-serif',

    // This causes the same problem so it is not the variable
    // fontFamily: '"Noto Serif", ui-serif, Georgia, Times New Roman, serif',
  },
});
