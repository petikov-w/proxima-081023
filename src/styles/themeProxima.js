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
            // values: {
            //     mobile: 380,
            //     tablet: 768,
            //     laptop: 1440,
            //     desktop: 2560,
            // },
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
        //=============================================================
        title: {
            fontFamily: 'RussoOne',
            fontSize: '48px',
            fontWeight: 400,
            lineHeight: '46px',
            textAlign: 'left',
            color: themeProxima.palette.primary.main,
            [themeProxima.breakpoints.down('sm')]: {
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
            [themeProxima.breakpoints.down('sm')]: {
                width: '80%',
                fontSize: '16px',
                lineHeight: '20px',
                textAlign: 'center',
            },
        },
    },
});




