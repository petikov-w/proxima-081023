import React from 'react';
import styled from 'styled-components';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';


const Main = styled.div` 
     min-height: calc(91.3vh - 85px - 22px);
     padding-top: 1.5rem 0;         
`;

export const NotFoundPage = () => {

    return (
        <>
                <Header />
                <Main>
                  
                </Main>
                <Footer />
        </>
    );
};
