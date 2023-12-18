import React from 'react';
import {Box} from '@mui/material';

import { Header } from '@components/Header';
import { Footer } from '@components/Footer';
import { AdvantagesBox } from '@components/Advantages';
import { HeroBox } from '@components/Hero';

// import { mainSX } from '@styles/pageHome.styled';
import {mainSX} from '../styles/pageHome.styled';
export const HomePage = () => {

    return (
        <>
            <Header />
                <Box sx={mainSX}>
                    <HeroBox />
                    <AdvantagesBox />
                </Box>
                <Footer />
        </>
    );
};