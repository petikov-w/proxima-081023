import React, { useState } from 'react';
import styled from 'styled-components';

import {Telefon} from '@components/Telefon';

import logo from '../assets/images/logo_proxima.png';

import {Dialog2} from './Dialog2';
import {device} from './device';
import {themeProxima} from '../styles/themeProxima';
import {Box, CardMedia, useTheme} from '@mui/material';
import car from '@images/car_1.png';



const HeaderBox = styled.div`
   display: flex;   
   justify-content: space-between;
   align-items: center;
   color: var(--slave-color);
   height: 90px;
   @media ${device.mobileM} {
     flex-direction: column;    
     margin-top: 30px;
     margin-bottom: 60px;
   }
`;

const Question = styled.span`
   font-family: OpenSans;
   font-size: 16px;
   font-weight: 600;
   color: var(--master-color);
   cursor: pointer;

   &:hover {
    text-decoration: underline;
    color: #f86a3a;
   }
`;



export const Header = () => {
  // ========================================================================    
  const [modalActiv, setModalActiv ] = useState(false);
  const theme = useTheme();

    const logoSX = {
        width: 'auto',
    };

    const infoBox = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    };


    const numberSX = {
        color: theme.palette.secondary.main,
        fontFamily: theme.typography.fontMaster,
        fontSize: '24px',
        lineHeight: '29px',
        letterSpacing: '2px',
        fontWeight: '400',
        textDecoration: 'none',
        marginBottom: '5px',
        '&:hover': {
            opacity: '0.6',
        },
    };
  const handleClickOpen = () => {
    setModalActiv(true);
  };

    const tel = '98916 45 512 89';
  // ========================================================================
     
    return (
        <>               
          <HeaderBox>
              <CardMedia component="img"
                         image={logo}
                         sx = {logoSX} />
              {/*<img src={logo} alt="logo" />*/}
              <Box sx={infoBox}>
                  <Telefon phone={tel} styleNumber={numberSX} />
                  <Question onClick={handleClickOpen}>Есть вопросы? Задавайте.</Question>
              </Box>
          </HeaderBox>      

          <Dialog2 activ={modalActiv} setActiv={setModalActiv} />
        </>
      );

};