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
        fontMaster: {
            fontFamily: 'RussoOne',
        },
        fontSlave: {
            fontFamily: 'OpenSans',
        },
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
        title_font_color: {
            fontFamily: 'RussoOne',
            color: themeProxima.palette.secondary.main,
        },
        title_sizes: {
            fontSize: '20px',
            fontWight: '400',
            lineHeight: '24px',
        },
    },


    components: {
        MuiTypography: {
            variants: [
                {
                    props: { variant: 'info_procent' },
                    style: {
                        fontFamily: 'RussoOne',
                       color: themeProxima.palette.secondary.main,
                       fontSize: '36px',
                       opacity: 0.6,
                    },
                },
                {
                    props: { variant: 'info_gaz' },
                    style: {
                        fontFamily: 'RussoOne',
                        color: themeProxima.palette.secondary.main,
                        fontSize: '18px',
                        opacity: 0.6,
                    },
                },
                {
                    props: { variant: 'advantages_title' },
                    style: {
                        fontFamily: 'RussoOne',
                        color: themeProxima.palette.primary.main,
                        fontSize: '20px',
                        fontWight: '400',
                        lineHeight: '24px',

                    },
                },
            ],
        },
    },

});




