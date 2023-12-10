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
                mobile: 380,
                tablet: 768,
                laptop: 1440,
                desktop: 2560,
            },
        },
        });

themeProxima = createTheme(themeProxima, {
    typography: {
        title: {
            fontFamily: 'RussoOne',
            fontSize: '48px',
            fontWeight: 400,
            lineHeight: '46px',
            textAlign: 'left',
            color: themeProxima.palette.primary.main,
            [themeProxima.breakpoints.down('mobile')]: {
                width: '80%',
                fontSize: '30px',
                lineHeight: '32px',
                textAlign: 'center',
            },
        },
        subtitle: {
            fontFamily: 'RussoOne',
            fontSize: '21px',
            fontWeight: '400',
            lineHeight: '25px',
            textAlign: 'left',
            color: themeProxima.palette.secondary.main,
            [themeProxima.breakpoints.down('mobile')]: {
                width: '80%',
                fontSize: '16px',
                lineHeight: '20px',
                textAlign: 'center',
            },
        },
    },
});




