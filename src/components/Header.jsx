import React, { useState } from 'react';
import {Telefon} from '@components/Telefon';
import {CardMedia, Stack, Typography, useTheme} from '@mui/material';

import logo from '../assets/images/logo_proxima.png';

import {headerSX, infoSX, logoSX, numberSX, questionSX} from '../styles/header.styled';

import {Dialog2} from './Dialog2';


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
            <Stack sx={headerSX} direction={{ xs: 'column', sm: 'row' }}>
                  <CardMedia component="img"
                             image={logo}
                             sx = {logoSX} />
                  <Stack sx={infoSX}>
                      <Telefon phone={tel} styleNumber={numberSX(theme)} />
                      <Typography onClick={handleClickOpen} sx={questionSX(theme)}>Есть вопросы? Задавайте.</Typography>
                  </Stack>
            </Stack>
            <Dialog2 activ={modalActiv} setActiv={setModalActiv} />
        </>
      );
};