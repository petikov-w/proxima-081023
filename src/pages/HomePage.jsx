import React from 'react';
import styled from 'styled-components';

// import { device, size_screen } from '../src/components/device';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { AdvantagesBox } from '../components/Advantages';

import { HeroBox } from '../components/Hero';



const Main = styled.div` 
     min-height: calc(91.3vh - 85px - 22px);
     padding-top: 1.5rem 0;         
`;

export const HomePage = () => {

    return (
        <>
                <Header />
                <Main>
                    <HeroBox />
                    <AdvantagesBox />
                </Main>
                <Footer />
        </>
    );
};