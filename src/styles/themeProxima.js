// import { Palette } from '@mui/icons-material';
import {createTheme } from '@mui/material/styles';


// export const Theme = (theme) => createTheme({
export let themeProxima= createTheme({
        palette: {
            primary: {
                main: '#EF5221',
            },
            secondary: {
                main: '#ffffff',
            },

        },
        breakpoints: {
            values: {
                xs: 0,
                sm: 400,
                md: 768,
                lg: 1440,
                xl: 2560,
            },
        },
        });

themeProxima = createTheme(themeProxima, {
    typography: {
        text01: {
            fontFamily: 'RussoOne',
            color: themeProxima.palette.primary.main,
        },
        text02: {
            fontFamily: 'RussoOne',
            color: themeProxima.palette.secondary.main,
        },
        text03: {
            fontFamily: 'OpenSans',
            color: themeProxima.palette.secondary.main,
        },
    },
});




