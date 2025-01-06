import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as MUIThemeProvider, createTheme } from '@mui/material/styles';
import { palette } from './palette';
import { components } from './components';
import React from 'react'

const ThemeProvider = ({ children }) => {
    const theme = createTheme({ palette, components });

    return (
        <MUIThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </MUIThemeProvider>
    );
}

export default ThemeProvider