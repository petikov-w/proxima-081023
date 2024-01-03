import React from 'react';

import {Button, Stack, Typography} from '@mui/material';
import { Link } from 'react-router-dom';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';


const ButtonSX =(theme) => ({
    color: theme.palette.primary.main,
    padding: '7px 30px',
    border: 2,
    fontWeight: 500,
    fontSize: 12,
    marginTop: '20px',
});


const TitleSX = (theme) => ({
    fontSize:'48px',
    fontWeight: '600',
    color: theme.palette.primary.main,
    [theme.breakpoints.down('sm')]: {
        fontSize:'24px',
    },
});

const SubTitleSX = (theme) => ({
    fontSize:'48px',
    fontWeight: '600',
    textAlign: 'center',
    color: theme.palette.secondary.main,
    [theme.breakpoints.down('sm')]: {
        fontSize:'20px',
        margin: '40px 0',
    },
});

const MainSX =(theme) => ({
    minHeight: 'calc(91.3vh - 85px - 22px)',
    paddingTop: '1.5rem',
    marginTop: '-30px',
    [theme.breakpoints.down('sm')]: {
        minHeight: 'calc(85.3vh - 85px - 22px)',
    },
});

export const ThankYouPage = () => {
    const title = 'Спасибо за обращение';
    const subtitle = 'Наш специалист свяжется с вами в ближайщее время';
    const textButton = 'Вернуться на главную';

    return (
        <>
                <Header />
                <Stack sx = {MainSX} justifyContent="center" alignItems="center">
                    <Typography sx = {TitleSX}>{title.toUpperCase()}</Typography>
                    <Typography sx = {SubTitleSX}>{subtitle.toUpperCase()}</Typography>
                    <Link to="/">
                        <Button sx={ButtonSX}>{textButton}</Button>
                    </Link>
                </Stack>
                <Footer />
        </>
    );
};
