import React from 'react';
import styled from 'styled-components';

import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';


const LinkStyled = styled(Link)`
 /* padding: 1rem 0.9rem; */
 text-decoration: none;
 cursor: pointer; 
`;  

const ButtonSX ={
    color: '#f86a3a',
    p: '7px 30px',
    border: 2,
    fontWeight: 500,
    fontSize: 12, 
    marginTop: '20px',
};

const TitleSX = {
    fontSize:'48px', 
    fontWeight: '600', 
    color: '#f86a3a',
};

const SubTitleSX = {
    fontSize:'24px', 
    fontWeight: '400', 
    color: '#ffffff',
};

const Main = styled.div` 
     min-height: calc(91.3vh - 85px - 22px);
     padding-top: 1.5rem 0;         
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     margin-top: -30px;
`;

export const ThankYouPage = () => {

    return (
        <>
                <Header />
                <Main>
                    <Typography sx = {TitleSX}>СПАСИБО ЗА ОБРАЩЕНИЕ</Typography>
                    <Typography sx = {SubTitleSX}>НАШ СПЕЦИАЛИСТ СВЯЖЕТСЯ С ВАМИ В БЛИЖАЙШЕЕ ВРЕМЯ</Typography>
                    <LinkStyled to="/">
                        <Button sx={ButtonSX}>Вернуться на главную</Button>
                    </LinkStyled>
                </Main>
                <Footer />
        </>
    );
};

// СПАСИБО ЗА ОБРАЩЕНИЕ
// НАШ СПЕЦИАЛИСТ СВЯЖЕТСЯ С ВАМИ В БЛИЖАЙШЕЕ ВРЕМЯ