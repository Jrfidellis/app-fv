import React from 'react';
import { ThemeProvider } from 'styled-components';

export const theme = {
  colors: {
    theme: '#0F90FA',
    white: '#FFF',
    black: '#333',
    gray: '#555'
  }
};

export const Theme = ({ children }: any) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
