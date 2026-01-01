'use client';

import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme2 } from './theme2';

export default function ThemeProvider2({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MuiThemeProvider theme={theme2}>
      {children}
    </MuiThemeProvider>
  );
}
