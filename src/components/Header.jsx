import React, { useState } from 'react';
import styled from 'styled-components';

import {Telefon} from '@components/Telefon';
import {Box, CardMedia, Stack, useTheme} from '@mui/material';

import logo from '../assets/images/logo_proxima.png';

import {infoBox, logoSX, numberSX} from '../styles/header.styled';

import {Dialog2} from './Dialog2';

import {device} from './device';


const headerSX =(theme) => ({
    color: theme.palette.secondary.main,
    height: '90px',
    [theme.breakpoints.down('sm')]: { direction: 'column' },
    [theme.breakpoints.up('sm')]: { direction: 'row', alignItems: 'flex-start',
                                        justifyContent: 'space-between' },
});

// const HeaderBox = styled.div`
//    display: flex;
//    justify-content: space-between;
//    align-items: center;
//    color: var(--slave-color);
//    height: 90px;
//    @media ${device.mobileM} {
//      flex-direction: column;
//      margin-top: 30px;
//      margin-bottom: 60px;
//    }
// `;

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
  const theme = useTheme();
  const [modalActiv, setModalActiv ] = useState(false);
  const handleClickOpen = () => {
    setModalActiv(true);
  };
  const tel = '98916 45 512 89';
  // ========================================================================
     
    return (
        <>               
          {/*<HeaderBox>*/}
            <Stack sx={headerSX} >
                  <CardMedia component="img"
                             image={logo}
                             sx = {logoSX} />
                  <Box sx={infoBox}>
                      <Telefon phone={tel} styleNumber={numberSX(theme)} />
                      <Question onClick={handleClickOpen}>Есть вопросы? Задавайте.</Question>
                  </Box>
            </Stack>
          {/*</HeaderBox>      */}

          <Dialog2 activ={modalActiv} setActiv={setModalActiv} />
        </>
      );

};